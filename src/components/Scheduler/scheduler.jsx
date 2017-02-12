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
    console.log("removing course at cId");
    console.log(cId);

    this.setCourseAttr((courses) => {
      let strs = ["one", "two", "three"];
      console.log("before");
      console.log(courses);
      console.log(strs);
      courses.splice(cId, 1);
      strs.splice(cId, 1);
      console.log("after");
      console.log(courses);
      console.log(strs);
    });
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
    this.setCourseAttr((courses) =>
      courses[cId].sections[sId].times.splice(tId, 1));
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
    let domCourses = this.state.courses.map(function(c, index) {
      return (
        <Course key={c.key}
                id={c.key}
                setName={(name) => c.name = name}
                addCourse={() => this.addCourse(index)}
                removeCourse={() => this.removeCourse(index)}
                sections={c.sections}
                setSectionNumber={(sIndex, num) => c.sections[sIndex].number = num}
                addSection={(sIndex) => this.addSection(index, sIndex)}
                removeSection={(sIndex) => this.removeSection(index, sIndex)}
                addTime={(sIndex, tIndex) => this.addTime(index, sIndex, tIndex)}
                removeTime={(sIndex, tIndex) => this.removetime(index, sIndex, tIndex)}
                setStartTime={(sId, tId, time) => this.setStartTime(index, sId, tId, time)}
                setEndTime={(sId, tId, time) => this.setEndTime(index, sId, tId, time)}
                setDay={(sId, tId, day, isPresent) => this.setDay(index, sId, tId, day, isPresent)}
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
