import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './CategoryTile.css'

import TextBox from '../../../components/TextBox'

export default class CategoryTile extends Component {
  static propTypes = {
    text: PropTypes.string,
    setCategory: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      isEnabled: !props.text,
    };
  }

  handleClick(e) {
    this.setState({isEnabled: !this.state.isEnabled})
  }

  render() {
    let textEntry = (
      <TextBox hintText="Enter a category"
               multiLine={true}
               rowsMax={3}
               defaultValue={this.props.text}
               onChange={(e, val) => this.props.setCategory(val)}
               />
    );
    let content = (this.state.isEnabled)
      ? textEntry
      : this.props.text;


    return (
      <div className={cx(s.tile)}
           onDoubleClick={(e) => this.handleClick(e)}>
        {content}
      </div>
    );
  }
}
