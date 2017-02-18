import React, { Component, PropTypes } from 'react'
import s from './BlogTile.css'
import cx from 'classnames'

export default class BlogTile extends Component {
  static propTypes = {

  }

  up(str) { return str.toUpperCase(); }

  render() {
    return (
      <div className={s.tile}>
        <h3 className={s.title}>{this.up(this.props.title)}</h3>
        <div className={cx(s.info, s.row)}>
          <div className={s.date}>{this.up(this.props.date)}</div>
          <div className={s.author}>BY {this.up(this.props.author)}</div>
        </div>
        <div className={s.summary}>{this.props.summary}</div>
      </div>
    );
  }
}
