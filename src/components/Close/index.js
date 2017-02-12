import React, { Component } from 'react'
import s from './Close.css'

export default class Close extends Component {
  render() {
    return (
      <div className={s.closeWrapper} onClick={this.props.onClick}>
        <div className={s.close}></div>
      </div>
    );
  }
}
