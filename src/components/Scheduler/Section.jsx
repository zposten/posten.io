import React, { Component } from 'react'
import s from './Section.css'

import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'


export default class Section extends Component {


  render() {

    return (
      <div className={s.section}>
        <div className={s.row}>
          <TextBox label="Section #" className={s.sectionNum} fullWidth={true}/>
          <div className={s.times}>{this.props.children}</div>
        </div>
        <div className={s.row}><AddButton /></div>

        <Close />
      </div>
    );

  }
}
