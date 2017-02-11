import React, { Component } from 'react'
import s from './Course.css'
import TextBox from '../TextBox/TextBox.jsx'

export default class Course extends Component {


  render() {

    return (
      <div className={s.course}>
        <TextBox label="Zach is cool"/>
      </div>
    );

  }
}
