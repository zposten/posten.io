import React, { Component, PropTypes } from 'react'
import s from './BlogTile.css'
import cx from 'classnames'
import colors from '../../../utils/colors'
import Chip from 'material-ui/Chip'

export default class BlogTile extends Component {
  static propTypes = {

  }

  up(str) {
    if (!str) return undefined;
    return str.toUpperCase();
  }

  render() {
    let tags = this.props.tags.map(tag =>
      <Chip className={s.tag}
            style={{marginRight: '5px', backgroundColor: colors.DARK}}
            >{tag}</Chip>);

    return (
      <div className={cx(s.tile, 'hvr-rotate')}>
        <div>
          <h3 className={s.title}>{this.up(this.props.title)}</h3>
          <div className={cx(s.info, s.row)}>
            <div className={s.date}>{this.up(this.props.date)}</div>
            <div className={s.author}>BY {this.up(this.props.author)}</div>
          </div>
          <div className={s.summary}>{this.props.summary}</div>
        </div>
        <div className={s.tags}>{tags}</div>
      </div>
    );
  }
}
