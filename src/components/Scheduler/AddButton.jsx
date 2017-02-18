import React, { Component } from 'react'
import s from './AddButton.css'
import cx from 'classnames'


export default class AddButton extends Component {


  render() {
    return (
      <div>
        <a className={cx(s.button, 'hvr-icon-bounce')}
           onClick={this.props.onClick}></a>
      </div>
    );
  }
}
