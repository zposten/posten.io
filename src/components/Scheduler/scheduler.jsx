import React, { Component } from 'react'
import s from './Scheduler.css'
import { title, subtitle } from './Scheduler.md'
import Course from './Course.jsx'
import ScheduleMaker from './ScheduleMaker'
import TableMaker from './TableMaker.jsx'

import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';



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
    this.setCourseAttr((courses) => {
      courses[cId].name = name;
      if (name) courses[cId].error = undefined;
    });
  }
  setSectionNumber(cId, sId, secNum) {
    this.setCourseAttr((courses) => {
      let section = courses[cId].sections[sId];
      section.number = secNum;
      if (secNum) section.error = undefined;
    });
  }
  setStartTime(cId, sId, tId, date) {
    this.setCourseAttr((courses) => {
      let time = courses[cId].sections[sId].times[tId];
      time.start = date;
      if (date) time.startError = undefined;
    });
  }
  setEndTime(cId, sId, tId, date) {
    this.setCourseAttr((courses) => {
      let time = courses[cId].sections[sId].times[tId];
      time.end = date;
      if (date) {
        if (time.start && time.end < time.start) return;
        time.endError = undefined;
      }
    });
  }
  setDay(cId, sId, tId, day, isPresent) {
    this.setCourseAttr((courses) => {
      let time = courses[cId].sections[sId].times[tId];
      time.days[day] = isPresent;
      if (isPresent) time.dayError = undefined;
    });
  }

  makeSchedules() {
    let hasError = this.validate();
    if (hasError) return;

    console.log("Forming schedules with data: " + JSON.stringify(this.state.courses));

    let sm = new ScheduleMaker(this.state.courses);
    let tm = new TableMaker(sm.make());
    this.setState({schedules: tm.makeHtml()});
  }

  /**
   * Create a copy of the courses array in state, supply it to
   * a ballback for manipulation, and then set the state with the
   * manipulated object.
   */
  setCourseAttr(callback) {
    let newState = { courses: [ ...this.state.courses ] };
    callback(newState.courses);
    this.setState(newState);
  }

  componentDidMount() {
    this.addCourse();
  }

  validate() {
    let error = "This field is required";
    let foundError = false;

    this.setCourseAttr((courses) => {
      for (let course of courses) {
        if (!course.name) {
          course.error = "Please supply a course name!";
          foundError = true;
        } else {
          course.error = undefined;
        }

        for (let section of course.sections) {
          if (!section.number) {
            section.error = "Missing section #!";
            foundError = true;
          } else {
            section.error = undefined;
          }

          for (let time of section.times) {
            let days = time.days;
            let oneDaySelected = (days.M || days.T || days.W || days.R || days.F);
            if (!oneDaySelected) {
              time.dayError = "Please choose a day!";
              foundError = true;
            }
            if (!time.start) {
              time.startError = "Missing start time!"
              foundError = true;
            }
            if (!time.end) {
              time.endError = "Missing end time!"
              foundError = true;
            }
            if (time.start && time.end && time.end < time.start) {
              time.endError = "End time can't be before start time"
              foundError = true;
            }
          }
        }
      }
    });

    if (foundError) this.setState({schedules: undefined, error: true});
    return foundError;
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
                error={c.error}
                />
      );
    }, this);

    let errorText = (function(context) {
      if (context.state.error)
        return <p className={s.errorText}>See highlighted errors above</p>;
    })(this);

    console.log("BLUE500");
    console.log(blue500);

    let rightArrowIcon = (
      <FontIcon className="fa fa-arrow-right hvr-icon-wobble-horizontal" color={"white"} />);

    return (
      <div className={s.pageWrapper}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.subtitle}>{subtitle}</p>
        <div className={s.scheduler}>
          {domCourses}
          {errorText}

          <RaisedButton
            label="Make Schedules!"
            labelPosition="before"
            primary={true}
            icon={rightArrowIcon}
            style={{backgroundColor: 'orange'}}
            onClick={() => this.makeSchedules()}
          />
        </div>
        <div className={s.outputWrapper}>{this.state.schedules}</div>
      </div>
    );

  }
}
