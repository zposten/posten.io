import React, { Component, PropTypes} from 'react'
import s from './Card.css'
import cx from 'classnames'

import {Link} from 'react-router'


export default class Card extends Component {

  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    to: PropTypes.string,
  };

  render() {
    return (
      <Link to={this.props.to}>
        <div className={s.wrapper}>
          <div className={s.imageWrapper}><img src={this.props.src} /></div>
          <div className={s.textArea}>
            <h3 className={s.title}>{this.props.title}</h3>
            <p className={s.summary}>{this.props.summary}</p>
          </div>
        </div>
      </Link>
    );
  }
}
