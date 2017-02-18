import React, { Component, PropTypes } from 'react'
import s from './Course.css'
import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'

import Section from './Section.jsx'

export default class Course extends Component {
  static propTypes = {
  }

  render() {
    let domSections = this.props.sections.map(function(s, sId) {
      return (
        <Section key={s.key}
                 number={s.number}
                 setSectionNumber={(num) => this.props.setSectionNumber(sId, num)}
                 addSection={() => this.props.addSection(sId)}
                 removeSection={() => this.props.removeSection(sId)}
                 times={s.times}
                 addTime={(tIndex) => this.props.addTime(sId, tIndex)}
                 removeTime={(tIndex) => this.props.removeTime(sId, tIndex)}
                 setStartTime={(tId, time) => this.props.setStartTime(sId, tId, time)}
                 setEndTime={(tId, time) => this.props.setEndTime(sId, tId, time)}
                 setDay={(tId, day, isPresent) => this.props.setDay(sId, tId, day, isPresent)}
                 error={s.error}
                 ></Section>
      );
    }, this);

    return (
      <div className={s.course}>
        <TextBox label="Course #"
                 onChange={(e, val) => this.props.setCourseName(val)}
                 errorText={this.props.error}
                 value={this.props.name} />
        <div className={s.sectionWrapper}>
          {domSections}
        </div>
        <AddButton onClick={() => this.props.addCourse()}/>
        <Close onClick={() => this.props.removeCourse()}/>
      </div>
    );

  }
}
