import React, {Component, PropTypes} from 'react'
import s from './Time.css'
import colors from '../../../../../utils/colors'
import cx from 'classnames'

import AddButton from '../AddButton.js'
import Close from '../../../../../components/Close'
import TimePicker from './TimePicker.js'

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

  componentWillMount() {
    let d1 = new Date();
    d1.setHours(8);
    d1.setMinutes(0);
    let d2 = new Date();
    d2.setHours(9);
    d2.setMinutes(0);
    this.props.setStartTime(d1);
    this.props.setEndTime(d2);

    this.d1 = d1;
    this.d2 = d2;
  }

  render() {
    let domChecks = Object.keys(this.props.days).map(function(day) {
      return (
        <div className={s.day} key={day}>
          <Checkbox label={day}
                    iconStyle={{color: colors.TEXT}}
                    labelStyle={{color: colors.TEXT}}
                    onCheck={(e, checked) => this.props.setDay(day, checked)}
                    checked={this.props.days[day]}
                    />
        </div>
      );
    }, this)

    return (
      <div className={s.time}>
        <div className={cx(s.row, s.days, {[s.error]: this.props.dayError})}>{domChecks}</div>
        <div className={cx(s.row, s.pickers)}>
          <TimePicker label="Start Time"
                      style={{marginRight: '20px'}}
                      onChange={(isNull, date) => this.props.setStartTime(date)}
                      defaultTime={this.d1}
                      error={this.props.startError}
                      value={this.props.start}
                      />
          <TimePicker label="End Time"
                      onChange={(isNull, date) => this.props.setEndTime(date)}
                      defaultTime={this.d2}
                      error={this.props.endError}
                      value={this.props.end}
                      />
        </div>
        <div className={s.row}>
          <AddButton onClick={() => this.props.addTime()}/>
        </div>
        <Close onClick={() => this.props.removeTime()}/>
      </div>
    );
  }
}
