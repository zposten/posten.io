import React, { Component } from 'react'
import s from './Scheduler.css'
import { title, subtitle } from './Scheduler.md'

import Course from './Course.jsx'


export default class Scheduler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      coursesCreated: 0,
    };
  }

  addCourse(index) {
    console.log("addCourse");
    let c = this.state.courses;
    if (index == undefined) index = c.length;

    console.log("Adding course with key: " + this.state.coursesCreated);
    // Insert at index, deleting 0 items first
    c.splice(index, 0,
      <Course key={this.state.coursesCreated}
              id={this.state.coursesCreated}
              remove={(toRemove) => this.removeCourse(toRemove)}
              add={() => this.addCourse(index + 1)}
              />
    );
    this.setState({
      courses: c,
      coursesCreated: this.state.coursesCreated + 1,
    });
  }

  removeCourse(idToRemove) {
    console.log("trying to remove id: " + idToRemove);

    for (let i=0; i<this.state.courses.length; ++i) {
      let course = this.state.courses[i];
      console.log(course);
      console.log("found id: " + course.props.id);

      if (course.props.id == idToRemove) {
        console.log("removeing course at index " + i + " with id " + course.props.id);
        this.setState({courses: this.state.courses.splice(i, 1)})
        break;
      }
    }
  }

  componentDidMount() {
    this.addCourse();
  }

  render() {
    return (
      <div className={s.pageWrapper}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.subtitle}>{subtitle}</p>
        <div className={s.scheduler}>
          {this.state.courses}
        </div>
      </div>
    );

  }
}
