import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './SchedulerPage.css'

import Scheduler from './Component/Scheduler.js'
import { title, subtitle } from './Scheduler.md'

export default class SchedulerPage extends Component {
  render() {
    return (
      <div className={s.pageWrapper}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.subtitle}>{subtitle}</p>
        <Scheduler />
      </div>
    );
  }
}
