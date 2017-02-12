import React, {Component, PropTypes} from 'react'
import s from './Time.css'
import colors from '../../../utils/colors'
import cx from 'classnames'

import AddButton from '../AddButton.jsx'
import Close from '../../Close/Close.jsx'
import TimePicker from './TimePicker.jsx'

import Checkbox from 'material-ui/Checkbox'

export default class Time extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      startTime: null,
      endtime: null,
      days: [],
    };
  }

  render() {
    let domChecks = ['M', 'T', 'W', 'R', 'F'].map(function(day) {
      return (
        <div className={s.day} key={day}>
          <Checkbox label={day}
                    iconStyle={{color: colors.TEXT}}
                    labelStyle={{color: colors.TEXT}}
                    onCheck={(e, checked) => this.props.setDay(day, checked)}
                    />
        </div>
      );
    }, this)

    return (
      <div className={s.time}>
        <div className={cx(s.row, s.days)}>{domChecks}</div>
        <div className={cx(s.row, s.pickers)}>
          <TimePicker label="Start Time"
                      style={{marginRight: '20px'}}
                      onChange={(isNull, date) => this.props.setStartTime(date)}
                      />
          <TimePicker label="End Time"
                      onChange={(isNull, date) => this.props.setEndTime(date)}
                      />
        </div>
        <div className={s.row}>
          <AddButton onClick={this.props.add}/>
        </div>
        <Close onClick={() => this.props.remove(this)}/>
      </div>
    );
  }
}
