import React, { Component } from 'react'
import s from './Collapsible.css'
import cx from 'classnames'

export default class Collapsible extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className={s.wrapper}>
        <h1 className={s.header}
             onClick={() => this.toggle()}>{this.props.title}</h1>
        <div className={cx(s.content, {[s.hidden]: !this.state.isOpen})}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
