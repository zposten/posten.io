import React from 'react'
import cx from 'classnames'
import s from './TableMaker.css'

export default class TableMaker {
  constructor(schedules) {
    this.schedules = schedules;

    // 50 pixels tall dividev by 60 mins/hour
    this.pixelHeightOfOneMin = 50 / 60;
    this.titleBarHeight = 25; // px
  }

  makeHtml() {
    let tables = [];
    for (let i=0; i<this.schedules.length; ++i) {
      let schedule = this.schedules[i];
      let table = this.makeScheduleTableHtml(schedule);
      let classes = this.makeHtmlClasses(schedule);

      tables.push(
        <div className={s.schedule} key={i}>
          <div className={s.scheduleTable}>
            {table}
            {classes}
          </div>
        </div>
      );
    }
    return tables;
  }

  makeScheduleTableHtml(schedule) {
    let tHead = (
      <thead>
        <tr>
          <th className={s.time}>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
    );

    this.tableTimeRange = this.getTimeRange(schedule);
    let rows = this.tableTimeRange.map(function(hour) {
      return (
        <tr key={hour}>
          <th>{this.formatHour(hour)}</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }, this);

    return (
      <table>
        {tHead}
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

  getTimeRange(schedule) {
    console.log("getTimeRange");
    console.log(schedule);
    let earliestTime = schedule[0].times[0].start;
    let latestTime = schedule[0].times[0].end;

    for (let section of schedule) {
      for (let time of section.times) {
        if (!earliestTime || time.start < earliestTime)
          earliestTime = time.start;
        if (!latestTime || time.end > latestTime)
          latestTime = time.end;
      }
    }

    let startHour = earliestTime.getHours();
    let endHour = latestTime.getHours();

    if (latestTime.getMinutes() > 0) endHour++;

    // Create a buffer of one hour to each side
    startHour--;
    endHour++;

    return this.range(startHour, endHour);
  }

  formatHour(hour) {
    if (hour == 0) return "12:00 AM";
    if (hour < 12) return hour + ":00 AM";
    if (hour == 12) return "12:00 PM";
    return (hour - 12) + ":00 PM";
  }

  range(start, end) {
    let arr = [];
    for (; start <= end; ++start) {
      arr.push(start);
    }
    return arr;
  }







  makeHtmlClasses(schedule) {
    let classes = [];

    let tableStartTime = new Date();
    tableStartTime.setHours(this.tableTimeRange[0]);
    tableStartTime.setMinutes(0);

    let sectionIndex = 0;
    for (let sectionIndex = 0; sectionIndex < schedule.length; ++sectionIndex) {
      let section = schedule[sectionIndex];
      for (let time of section.times) {
        for (let day of Object.keys(time.days)) {
          if (!time.days[day]) continue;
          classes.push(this.makeHtmlClass(
            section.courseName, section.number, day, sectionIndex, time.start,
            this.lengthInMinutes(time.start, time.end), tableStartTime
          ));
        }
      }
    }

    return classes;
  }

  makeHtmlClass(
    courseName, sectionNumber, day, colorIndex,
    classStartTime, classLengthInMins, tableStartTime
  ) {

    const numAvailColors = 7;
    let height = this.calcHeight(classLengthInMins);

    return (
      <div className={cx(s['day' + day], s['color' + (colorIndex % numAvailColors)])}
           style={{
             height: height + 'px',
             top: this.calcTopMargin(classStartTime, tableStartTime) + 'px',
           }} >
        <div className={s.courseText}>
          <span className={s.courseName} style={{maxHeight: (height - 5) + 'px'}} >
            {courseName}/{sectionNumber}
          </span>
        </div>
      </div>
    );
  }

  calcHeight(lengthInMins) {
    const minClassLength = 25;
    return Math.max(lengthInMins, minClassLength) * this.pixelHeightOfOneMin;
  }

  calcTopMargin(classStartTime, tableStartTime) {
    let hourOffset = classStartTime.getHours() - tableStartTime.getHours();
    let minuteOffset = (hourOffset * 60) + classStartTime.getMinutes() - tableStartTime.getMinutes();
    return this.titleBarHeight + (this.pixelHeightOfOneMin * minuteOffset) - 2;
  }

  lengthInMinutes(start, end) {
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    return (hours * 60) + minutes;
  }
}
