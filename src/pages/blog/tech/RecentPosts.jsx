import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './RecentPosts.css'

import Tile from './BlogTile.jsx'
import * as sample from './posts/sample.md'

export default class RecentPosts extends Component {
  render() {
    let posts = [sample, sample];
    let tiles = posts.map(function(post, index) {
      return (
        <Tile title={post.title}
              date={post.date}
              author={post.author}
              summary={post.summary}
              key={post.title} />
      );
    });

    return (
      <div className={s.tiles}>
        {tiles}
      </div>
    );
  }
}
