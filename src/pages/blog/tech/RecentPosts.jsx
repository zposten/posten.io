import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './RecentPosts.css'

import Tile from './BlogTile.jsx'

import * as iosNav from './posts/ios-nav-controller.md'
import * as iosBreak from './posts/ios-required-break-statements.md'
import * as iosStatic from './posts/ios-storing-static-data.md'
import * as iosUiCreation from './posts/ios-ui-creation-methods.md'
import * as iosPopover from './posts/ios-ui-popover-controller.md'
import * as iosVarCopy from './posts/ios-view-var-copy.md'

export default class RecentPosts extends Component {
  splitTags(tagstr) {
    if (!tagstr) return [];
    return tagstr.split(',').map(tag => { if(tag) return tag.trim() });
  }

  parseDate(md) {
    if (!md.date) return;
    let monthStrs = ['January', 'February', 'March', 'April', 'May',
                     'June', 'July', 'August', 'September', 'October',
                     'November', 'December'];
    let d = md.date.split('-');

    md.dateObject = new Date(d[0], d[1], d[2]);
    md.dateString = `${monthStrs[d[1]]} ${d[2]}, ${d[0]}`;
  }

  render() {
    let posts = [iosNav, iosBreak, iosStatic, iosUiCreation, iosPopover, iosVarCopy];
    for (let post of posts) this.parseDate(post);

    posts.sort(function (md1, md2) {
      let date1 = md1.dateObject;
      let date2 = md2.dateObject;

      if (date1 < date2) return 1;
      if (date1 > date2) return -1;
      return 0;
    });

    let tiles = posts.map(function(post, index) {
      return (
        <Tile title={post.title}
              date={post.dateString}
              author={post.author}
              summary={post.summary}
              key={post.title}
              tags={this.splitTags(post.tags)}/>
      );
    }, this);

    return (
      <div className={s.tiles}>
        {tiles}
      </div>
    );
  }
}
