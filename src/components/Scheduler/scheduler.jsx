import React, { Component } from 'react'
import s from './Scheduler.css'

import Course from './Course.jsx'


export default class Scheduler extends Component {


  render() {

    return (
      <div className={s.scheduler}>
        <Course />
      </div>
    );

  }
}
