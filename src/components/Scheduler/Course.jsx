import React, { Component } from 'react'
import s from './Course.css'
import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'

export default class Course extends Component {


  render() {

    return (
      <div className={s.course}>
        <TextBox label="Course #"/>
        <div className={s.sectionWrapper}>{this.props.children}</div>
        <AddButton />
        <Close />
      </div>
    );

  }
}
