import React, { Component } from 'react'
import s from './Collapsible.css'
import cx from 'classnames'

export default class Collapsible extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {isOpen: true};
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.header} onClick={() => this.toggle()}>
          <h1>{this.props.title}</h1>
          <i className={cx({'fa'              : true,
                            'fa-chevron-right': !this.state.isOpen,
                            'fa-chevron-down' :  this.state.isOpen})}
              ariaHidden="true"></i>
        </div>
        <div className={cx(s.content, {[s.hidden]: !this.state.isOpen})}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
