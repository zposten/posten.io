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
    let domTimes = this.props.times.map(function(t, tId) {
      return (
        <Time key={t.key}
              start={t.start}
              end={t.end}
              days={t.days}
              addTime={() => this.props.addTime(tId)}
              removeTime={() => this.props.removeTime(tId)}
              setStartTime={(time) => this.props.setStartTime(tId, time)}
              setEndTime={(time) => this.props.setEndTime(tId, time)}
              setDay={(day, isPresent) => this.props.setDay(tId, day, isPresent)}
              ></Time>
      );
    }, this);

    return (
      <div className={s.section}>
        <div className={s.row}>
          <TextBox label="Section #"
                   className={s.sectionNum}
                   fullWidth={true}
                   onChange={(e, val) => this.props.setSectionNumber(val)}/>
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
