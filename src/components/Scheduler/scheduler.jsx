import React, { Component } from 'react'
import s from './Scheduler.css'
import { title, subtitle } from './Scheduler.md'

import Course from './Course.jsx'


export default class Scheduler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      count: 0,
    };
  }

  addCourse(cId) {
    this.setCourseAttr((courses) =>
      courses.splice(cId + 1, 0, this.generateCourse())
    );
  }
  removeCourse(cId) {
    if (this.state.courses.length == 1) return;
    this.setCourseAttr((courses) => courses.splice(cId, 1));
  }

  addSection(cId, sId) {
    this.setCourseAttr((courses) => courses[cId].sections.splice(sId + 1, 0, this.generateSection()));
  }
  removeSection(cId, sId) {
    if (this.state.courses[cId].sections.length == 1) return;
    this.setCourseAttr((courses) => courses[cId].sections.splice(sId, 1));
  }

  addTime(cId, sId, tId) {
    this.setCourseAttr((courses) =>
      courses[cId].sections[sId].times.splice(tId + 1, 0, this.generateTime()));
  }
  removeTime(cId, sId, tId) {
    if (this.state.courses[cId].sections[sId].times.length == 1) return;
    console.log(`Removing course at ${cId}, ${sId}, ${tId}`);
    this.setCourseAttr((courses) => courses[cId].sections[sId].times.splice(tId, 1));
  }

  generateCourse() {
    return {
      key: this.state.count++,
      name: undefined,
      sections: [this.generateSection()],
    }
  }
  generateSection() {
    return {
      key: this.state.count++,
      number: undefined,
      times: [this.generateTime()],
    }
  }
  generateTime() {
    return {
      key: this.state.count++,
      days: {M:false, T:false, W:false, R:false, F:false},
      start: undefined,
      end: undefined,
    };
  }

  setCourseName(cId, name) {
    this.setCourseAttr((courses) => courses[cId].name = name);
  }
  setSectionNumber(cId, sId, secNum) {
    this.setCourseAttr((courses) => courses[cId].sections[sId].number = secNum);
  }
  setStartTime(cId, sId, tId, time) {
    this.setCourseAttr((courses) =>
      courses[cId].sections[sId].times[tId].start = time);
  }
  setEndTime(cId, sId, tId, time) {
    this.setCourseAttr((courses) =>
      courses[cId].sections[sId].times[tId].end = time);
  }
  setDay(cId, sId, tId, day, isPresent) {
    this.setCourseAttr((courses) =>
      courses[cId].sections[sId].times[tId].days[day] = isPresent
    );
  }

  setCourseAttr(callback) {
    let newState = { courses: [ ...this.state.courses ] };
    callback(newState.courses);
    this.setState(newState);
  }

  componentDidMount() {
    this.addCourse();
  }

  render() {
    let domCourses = this.state.courses.map(function(c, cId) {
      return (
        <Course key={c.key}
                setCourseName={(name) => this.setCourseName(cId, name)}
                addCourse={() => this.addCourse(cId)}
                removeCourse={() => this.removeCourse(cId)}
                sections={c.sections}
                setSectionNumber={(sId, num) => this.setSectionNumber(cId, sId, num)}
                addSection={(sId) => this.addSection(cId, sId)}
                removeSection={(sId) => this.removeSection(cId, sId)}
                addTime={(sId, tId) => this.addTime(cId, sId, tId)}
                removeTime={(sIndex, tId) => this.removeTime(cId, sIndex, tId)}
                setStartTime={(sId, tId, time) => this.setStartTime(cId, sId, tId, time)}
                setEndTime={(sId, tId, time) => this.setEndTime(cId, sId, tId, time)}
                setDay={(sId, tId, day, isPresent) => this.setDay(cId, sId, tId, day, isPresent)}
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
