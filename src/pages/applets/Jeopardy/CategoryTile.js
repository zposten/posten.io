import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './CategoryTile.css'

export default class CategoryTile extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={cx(s.tile)}>
        {this.props.text}
      </div>
    );
  }
}
