
export default class ScheduleMaker {
  constructor(courses) {
    this.courses = courses;
  }

  make() {
    if (!this.courses || this.courses.length == 0) {
      return 'No courses supplied';
    }

    let schedules = this.combine();
    if (schedules.length == 0) {
      return 'No schedules could be generated';
    }

    return schedules;
  }

  combine() {
    let schedules = [];
    this.recursiveCombine(this.courses, [], schedules);
    return schedules;
  }

  recursiveCombine(courses, chosenSections, schedules) {
    if (chosenSections.length === Object.keys(courses).length) {
      schedules.push([...chosenSections]);
      return;
    }

    let next = chosenSections.length;
    let course = courses[next];
    for (let section of course.sections) {
      section.courseName = course.name;
      if (this.fitsInSchedule(section, chosenSections)) {
        chosenSections.push(section);
        this.recursiveCombine(courses, chosenSections, schedules);
        chosenSections.pop();
      }
    }
  }

  fitsInSchedule(newSection, schedule) {
    for (let existingSection of schedule) {
      if (this.sectionsOverlap(existingSection, newSection)) return false;
    }
    return true;
  }

  sectionsOverlap(secA, secB) {
    let overlap = false;
    for (let timeA of secA) {
      for (let timeB of secB) {
        if (this.timesOverlap(timeA, timeB)) return true;
      }
    }
    return false;
  }

  timesOverlap(timeA, timeB) {
    if (!this.daysOverlap(timeA.days, timeB.days)) return false;

    let aStartsBeforeBEnds = timeA.start < timeB.end;
    let aEndsAfterBStarts = timeA.end > timeB.start;
    let bStartsBeforeAEnds = timeB.start < timeA.end;
    let bEndsAfterAStarts = timeB.end > timeB.start;

    return (aStartsBeforeBEnds && aEndsAfterBStarts)
        || (bStartsBeforeAEnds && bEndsAfterAStarts);
  }

  daysOverlap(daysA, daysB) {
    return daysA.M && daysB.M
        || daysA.T && daysB.T
        || daysA.W && daysB.W
        || daysA.R && daysB.R
        || daysA.F && daysB.F;
  }
}
