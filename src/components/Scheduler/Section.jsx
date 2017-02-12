import React, { Component } from 'react'
import s from './Section.css'

import TextBox from '../TextBox/TextBox.jsx'


export default class Section extends Component {


  render() {

    return (
      <div className={s.section}>
        <TextBox label="Section #" className={s.sectionNum} fullWidth={true}/>
        <div className={s.times}>{this.props.children}</div>
      </div>
    );

  }
}
