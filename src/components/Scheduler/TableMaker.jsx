export default class TableMaker {
  constructor(schedules) {
    this.schedules = schedules;
  }

  makeHtml() {
    let tables = [];
    for (let sechedule of schedules) {
      let table = makeScheduleTableHtml(schedule);
      let classes = makeClassHtml(schedule);
      tables.push(
        <div className={'schedule'}>
          <div className={'schedule-table'}>
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

    let rows = getTimeRange(schedule).map(function(hour) {
      return (
        <tr>
          <th>{formatHour(hour)}</th>
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

    for (let section of schedule) {
      let sectionEarliestTime = null;
      let sectionLatestTime = null;

      for (let time of section.times) {
        if (!sectionEarliestTime || time.start < sectionEarliestTime)
          sectionEarliestTime = time.start;
        if (!sectionLatestTime || time.end > sectionLatestTime)
          sectionLatestTime = time.end;
      }
    }

    if (earliestTime == null || sectionEarliestTime < earliestTime)
      earliestTime = sectionEarliestTime;
    if (latestTime == null || sectionLatestTime > latestTime)
      latestTime = sectionLatestTime;
  }

  let startHour = earliestTime.getHours();
  let endHour = latestTime.getHours();

  if (latestTime.getMinutes() > 0) endHour++;

  // Create a buffer of one hour to each side
  startHour--;
  endHoru++;

  return range(startHour, endHour);
}

range(start, end) {
  let arr = [];
  for (; start <= end; ++start) {
    arr.push(start);
  }
  return arr;
}

formatHour(hour) {
  if (hour == 0) return "12:00 AM";
  if (hour < 12) return hour + ":00 AM";
  if (hour == 12) return "12:00 PM";
  return (hour - 12) + ":00 PM";
}

makeClassHtml(schedule) {
  let classes = [];
}
