import React, { Component } from 'react'
import s from './Scheduler.css'
import { title, subtitle } from './Scheduler.md'

import Course from './Course.jsx'
import Section from './Section.jsx'
import Time from './Time/Time.jsx'


export default class Scheduler extends Component {


  render() {

    return (
      <div className={s.pageWrapper}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.subtitle}>{subtitle}</p>
        <div className={s.scheduler}>
          <Course>
            <Section>
              <Time></Time>
            </Section>
          </Course>
        </div>
      </div>
    );

  }
}
