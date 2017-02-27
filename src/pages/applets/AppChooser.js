import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Apps.css'
import Card from '../../components/Card'

import * as schdMd from './Scheduler/Scheduler.md'
import * as jeopMd from './Jeopardy/Jeopardy.md'

export default class AppChooser extends Component {
  render() {
    return (
      <div className={s.cards}>
        <div className={s.card}>
          <Card src="https://static1.squarespace.com/static/554c2749e4b03b9398ae9d2a/t/554e914ae4b01a0eebce2a80/1431212364102/schedule.jpg?format=1500w"
                title={schdMd.title}
                summary={schdMd.subtitle}
                to="/apps/scheduler" />
        </div>
        <div className={s.card}>
          <Card src="http://www.okayplayer.com/wp-content/uploads/2016/07/Jeopardy-690.jpg"
                title={jeopMd.title}
                summary={jeopMd.subtitle}
                to="/apps/jeopardy" />
        </div>
      </div>
    );
  }
}
