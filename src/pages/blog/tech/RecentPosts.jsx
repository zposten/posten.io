import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './RecentPosts.css'

import Tile from './BlogTile.jsx'

import * as sample from './posts/sample.md'
import * as iosNav from './posts/ios-nav-controller.md'
import * as iosBreak from './posts/ios-required-break-statements.md'
import * as iosStatic from './posts/ios-storing-static-data.md'
import * as iosUiCreation from './posts/ios-ui-creation-methods.md'
import * as iosPopover from './posts/ios-ui-popover-controller.md'
import * as iosVarCopy from './posts/ios-view-var-copy.md'

export default class RecentPosts extends Component {
  splitTags(tagstr) {
    console.log("splitting: " + tagstr);
    if (!tagstr) return [];
    return tagstr.split(',').map(tag => { if(tag) return tag.trim() });
  }

  render() {
    let posts = [sample, iosNav, iosBreak, iosStatic, iosUiCreation, iosPopover, iosVarCopy];
    let tiles = posts.map(function(post, index) {
      return (
        <Tile title={post.title}
              date={post.date}
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
