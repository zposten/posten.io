import React, {Component, PropTypes} from 'react'
import s from './Time.css'
import colors from '../../../utils/colors'
import cx from 'classnames'

import AddButton from '../AddButton.jsx'
import Close from '../../Close/Close.jsx'
import TimePicker from './TimePicker.jsx'

import Checkbox from 'material-ui/Checkbox'

export default class Time extends Component {


  render() {
    let downChecks = ['M', 'T', 'W', 'R', 'F'].map(function(day) {
      return (
        <div className={s.day}>
          <Checkbox label={day}
                    iconStyle={{color: colors.TEXT}}
                    labelStyle={{color: colors.TEXT}}
                    />
        </div>
      );
    })

    return (
      <div className={s.time}>
        <div className={cx(s.row, s.days)}>{downChecks}</div>
        <div className={cx(s.row, s.pickers)}>
          <TimePicker label="Start Time"
                      style={{marginRight: '20px'}} />
          <TimePicker label="End Time" />
        </div>
        <div className={s.row}><AddButton /></div>
        <Close />
      </div>
    );
  }
}
