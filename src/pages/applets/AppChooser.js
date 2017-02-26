import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Apps.css'
import Card from '../../components/Card'

import * as schdMd from './Scheduler/Scheduler.md'

export default class AppChooser extends Component {
  render() {
    return (
      <div className={s.cards}>
        <div className={s.card}>
          <Card src="https://static1.squarespace.com/static/554c2749e4b03b9398ae9d2a/t/554e914ae4b01a0eebce2a80/1431212364102/schedule.jpg?format=1500w"
                title={schdMd.title}
                summary={schdMd.subtitle}
                to="/apps/scheduler" />
          <Card src=""
                title={'Jeopardy'}
                summary={'It\'s awesome, trust me'}
                to="/apps/jeopardy" />
        </div>
      </div>
    );
  }
}
