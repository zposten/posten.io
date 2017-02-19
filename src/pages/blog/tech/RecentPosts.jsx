import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './RecentPosts.css'

import Tile from './BlogTile.jsx'
import posts from './posts/posts'


export default class RecentPosts extends Component {
  render() {
    let tiles = posts.map(function(post, index) {
      return (
        <Tile title={post.title}
              date={post.dateString}
              author={post.author}
              summary={post.summary}
              key={post.title}
              tags={post.tags}
              to={`/blog/tech/${index}`}
              className={s.tile}/>
      );
    }, this);

    return (
      <div className={s.tiles}>
        {tiles}
      </div>
    );
  }
}
