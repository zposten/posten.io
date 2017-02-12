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

    c.splice(index, 0, this.generateCourse());
    this.setState({courses: c});
  }
  removeCourse(index) {
    this.setState({courses: this.state.courses.splice(index, 1)})
  }

  addSection(cId, sId) {
    this.setCourseAttr((courses) => courses.sections.splice(sId + 1, 0, this.generateSection()));
  }
  removeSection(cId, sId) {
    this.setCourseAttr((courses) => courses[cId].sections.splice(sId, 1));
  }

  addTime(cId, sId, tId) {
    this.setCourseAttr((courses) =>
      courses[cId].sections[sId].times.splice(tId + 1, 0, this.generateTime()));
  }
  removeTime(cId, sId, tId) {
    this.setCourseAttr((courses) =>
      courses[cId].sections[sId].times.splice(tId, 1));
  }

  generateCourse() {
    return {
      name: undefined,
      sections: [this.generateSection()],
    }
  }
  generateSection() {
    return {
      number: undefined,
      times: [this.generateTime()],
    }
  }
  generateTime() {
    return {
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
    console.log("cId");
    console.log(cId);
    this.setCourseAttr((courses) =>{
      console.log("courses");
      console.log(courses);
      courses[cId].sections[sId].times[tId].days[day] = isPresent;
    });
    console.log("this.state");
    console.log(this.state);
  }

  setCourseAttr(callback) {
    let newCourses = { courses: [ ...this.state.courses ] };
    callback(newCourses.courses );
    this.setState(newCourses);
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
