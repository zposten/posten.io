import React, { Component } from 'react'
import s from './Scheduler.css'
import { title, subtitle } from './Scheduler.md'

import Course from './Course.jsx'


export default class Scheduler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  addCourse(index) {
    let c = this.state.courses;
    if (index == undefined) index = c.length;

    c.splice(index, 0, generateCourse());
    this.setState({courses: c});
  }
  removeCourse(index) {
    this.setState({courses: this.state.courses.splice(index, 1)})
  }

  addSection(courseIndex, sectionIndex) {
    let c = this.state.courses[courseIndex];
    c.sections.splice(sectionIndex + 1, 0, generateSection());
  }
  removeSection(courseIndex, sectionIndex) {
    let c = this.state.courses[courseIndex];
    c.sections.splice(sectionIndex, 1);
    this.setState(this.state);
  }

  addTime(courseIndex, sectionIndex, timeIndex) {
    let c = this.state.courses[courseIndex];
    let s = c.sections[sectionIndex];
    s.times.splice(timeIndex + 1, 0, generateTime());
  }
  removeTime(courseIndex, sectionIndex, timeIndex) {
    let c = this.state.courses[courseIndex];
    let s = c.sections[sectionIndex];
    s.times.splice(timeIndex, 1);
    this.setState(this.state);
  }

  generateCourse() {
    return {
      name: undefined,
      sections: [generateSection()],
    }
  }
  generateSection() {
    return {
      number: undefined,
      times: [generateTime()],
    }
  }
  generateTime() {
    return {
      days: {m:0, t:0, w:0, r:0, f:0},
      start: undefined,
      end: undefined,
    };
  }

  componentDidMount() {
    this.addCourse();
  }

  render() {
    let domCourses = this.state.courses.map(function(c, index) {
      return (
        <Course key={index}
                id={index}
                setName={(name) => c.name = name}
                addCourse={() => this.addCourse(index)}
                removeCourse={() => this.removeCourse(index)}
                sections={c.sections}
                setSectionNumber={(sIndex, num) => c.sections[sIndex].number = num}
                addSection={(sIndex) => this.addSection(index, sIndex)}
                removeSection={(sIndex) => this.removeSection(index, sIndex)}
                addTime={(sIndex, tIndex) => this.addTime(index, sIndex, tIndex)}
                removeTime={(sIndex, tIndex) => this.removetime(index, sIndex, tIndex)}
                />
      );
    }, this);

    return (
      <div className={s.pageWrapper}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.subtitle}>{subtitle}</p>
        <div className={s.scheduler}>
          {domCourses}
        </div>
      </div>
    );

  }
}
