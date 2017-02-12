import React, { Component, PropTypes } from 'react'
import s from './Section.css'

import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'
import Time from './Time/Time.jsx'



export default class Section extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }

  render() {
    let domTimes = this.props.times.map(functi)

    return (
      <div className={s.section}>
        <div className={s.row}>
          <TextBox label="Section #" className={s.sectionNum} fullWidth={true}/>
          <div className={s.times}>{this.state.times}</div>
        </div>
        <div className={s.row}><AddButton onClick={this.props.add}/></div>

        <Close onClick={() => this.props.remove(this)}/>
      </div>
    );

  }
}
