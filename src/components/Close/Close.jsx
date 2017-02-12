import React, { Component } from 'react'
import s from './Close.css'

export default class Close extends Component {
  render() {
    return (
      <div className={s.closeWrapper}>
        <div className={s.close}></div>
      </div>
    );
  }
}
