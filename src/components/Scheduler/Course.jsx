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
    let domSections = this.props.sections.map(function(s, index) {
      return (
        <Section key={s.key}
                 number={s.number}
                 setSectionNumber={(num) => this.props.setSectionNumber(index, num)}
                 addSection={() => this.props.addSection(index)}
                 removeSection={() => this.props.removeSection(index)}
                 times={s.times}
                 addTime={(tIndex) => this.props.addTime(index, tIndex)}
                 removeTime={(tIndex) => this.props.removeTime(index, tIndex)}
                 setStartTime={(tId, time) => this.props.setStartTime(index, tId, time)}
                 setEndTime={(tId, time) => this.props.setEndTime(index, tId, time)}
                 setDay={(tId, day, isPresent) => this.props.setDay(index, tId, day, isPresent)}
                 />
      );
    }, this);

    return (
      <div className={s.course}>
        <TextBox label="Course #"/>
        <div className={s.sectionWrapper}>
          {domSections}
        </div>
        <AddButton onClick={() => this.props.addCourse()}/>
        <Close onClick={() => this.props.removeCourse()}/>
      </div>
    );

  }
}
