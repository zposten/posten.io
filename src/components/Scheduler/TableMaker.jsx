export default class TableMaker {
  constructor(schedules) {
    this.schedules = schedules;

    // 50 pixels tall dividev by 60 mins/hour
    this.pixelHeightOfOneMin = return 50 / 60;
    this.titleBarHeight = 25; // px
  }

  makeHtml() {
    let tables = [];
    for (let sechedule of schedules) {
      let table = this.makeScheduleTableHtml(schedule);
      let classes = this.makeHtmlClasses(schedule);
      tables.push(
        <div className={s.schedule}>
          <div className={s.scheduleTable}>
            {table}
            {classes}
          </div>
        </div>
      );
    }
  }

  makeScheduleTableHtml(schedule) {
    let tHead = (
      <thead>
        <tr>
          <th className={'time'}>Time</th>
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
        <tr>
          <th>{this.formatHour(hour)}</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    });

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
    let earliestTime = null;
    let latestTime = null;

    for (let course of schedule) {
      for (let section of course.sections) {
        for (let time of section.times) {
          if (!earliestTime || time.start < earliestTime)
            sectionEarliestTime = time.start;
          if (!latestTime || time.end > latestTime)
            sectionLatestTime = time.end;
        }
      }
    }

    let startHour = earliestTime.getHours();
    let endHour = latestTime.getHours();

    if (latestTime.getMinutes() > 0) endHour++;

    // Create a buffer of one hour to each side
    startHour--;
    endHoru++;

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
    for (let course of schedule) {
      for (let sectionIndex = 0; sectionIndex < course.sections.length; ++sectionIndex) {
        let section = course.sections[sectionIndex];
        for (let time of section.times) {
          for (let day of Object.keys(time.days)) {
            if (!time.days[day]) continue;
            classes.push(this.makeHtmlClass(
              course.name, section.number, day, sectionIndex, time.start,
              this.lengthInMinutes(time.start, time.end), tableStartTime
            ));
          }
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
      <div className={cx(s['day' + dow], s['color' + (colorIndex % numAvailColors)])}
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
    hourOffset = classStartTime.getHours() - tableStartTime.getHours();
    minuteOffset = (hourOffset * 60) + classStartTime.getMinutes() - tableStartTime.getMinutes();
    return this.titleBarHeight + (this.pixelHeightOfOneMin * minuteOffset);
  }

  lengthInMinutes(start, end) {
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    return (hours * 60) + minutes;
  }



}
