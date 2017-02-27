import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './CategoryTile.css'

import TextBox from '../../../components/TextBox'

export default class CategoryTile extends Component {
  static propTypes = {
    text: PropTypes.string,
    setCategory: PropTypes.func,
    tabIndex: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      isEnabled: !props.text,
    };
  }

  setEnabled(enabled) {
    if (!this.props.text) enabled = true;
    if (!enabled) enabled = !this.state.isEnabled;
    this.setState({isEnabled: enabled});
  }

  handleClick(e) {
    this.setEnabled();
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.setEnabled(false);
    }
  }

  handleBlur(e) {
    this.setEnabled(false);
  }

  handleChange(e) {
    this.props.setCategory(e.target.value);
  }

  render() {
    let textEntry = (
      <input type="text"
             autoFocus
             value={this.props.text}
             onChange={(e) => this.handleChange(e)}
             onKeyPress={(e) => this.handleKeyPress(e)}
             onBlur={(e) => this.handleBlur(e)}
             onFocus={(e) => e.target.select()}
             tabIndex={this.props.tabIndex}
             className={s.textbox}
             />
    );
    let content = (this.state.isEnabled)
      ? textEntry
      : <div className={s.category}>{this.props.text}</div>;


    return (
      <div className={cx(s.tile)}
           onDoubleClick={(e) => this.handleClick(e)}
           onFocus={() => console.log("focus")}>
        {content}
      </div>
    );
  }
}
