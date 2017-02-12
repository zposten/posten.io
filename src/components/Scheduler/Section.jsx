import React, { Component, PropTypes } from 'react'
import s from './Section.css'

import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'
import Time from './Time/Time.jsx'



export default class Section extends Component {
  static propTypes = {
  }

  render() {
    let domTimes = this.props.times.map(function(t, index) {
      return (
        <Time key={t.key}
              start={t.start}
              end={t.end}
              days={t.days}
              addTime={() => this.props.addTime(index)}
              removeTime={() => this.props.removeTime(index)}
              setStartTime={(time) => this.props.setStartTime(time)}
              setEndTime={(time) => this.props.setEndTime(time)}
              setDay={(day, isPresent) => this.props.setDay(index, day, isPresent)}
              ></Time>
      );
    }, this);

    return (
      <div className={s.section}>
        <div className={s.row}>
          <TextBox label="Section #" className={s.sectionNum} fullWidth={true}/>
          <div className={s.times}>{domTimes}</div>
        </div>
        <div className={s.row}>
          <AddButton onClick={() => this.props.addSection()}/>
        </div>

        <Close onClick={() => this.props.removeSection()}/>
      </div>
    );

  }
}
