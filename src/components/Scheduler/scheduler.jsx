import React, { Component } from 'react'
import s from './Scheduler.css'
import { title, subtitle } from './Scheduler.md'

import Course from './Course.jsx'


export default class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {courses: [<Course key={0} />]};
  }

  addCourse(index = -1) {
    let c = this.state.courses;
    if (index == -1) index = c.length;

    c.splice(index, 0,
      <Course key={c.length}
              remove={() => this.removeCourse(c.length)}
              />
    );
    this.setState({courses: c});
  }

  removeCourse(index) {
    this.setState({courses: this.state.courses.splice(index, 1)})
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
