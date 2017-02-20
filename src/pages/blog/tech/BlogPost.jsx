import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

import posts from './posts'
import Markdown from '../../../components/Markdown/Markdown.jsx'

export default class BlogPost extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let post = posts[this.props.params.postId];

    return (
      <Markdown html={post.html}
                title={post.title}
                subtitle={post.summary}
                author={post.author}
                date={post.dateString}
                />
    );
  }
}
