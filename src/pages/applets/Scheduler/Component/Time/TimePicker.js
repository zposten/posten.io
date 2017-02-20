import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './TimePicker.css'
import colors from '../../../../../utils/colors'

import MaterialTimePicker from 'material-ui/TimePicker'

export default class TimePicker extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className={cx(s.picker, {[s.error]: this.props.error})} style={this.props.style}>
        <MaterialTimePicker hintText={this.props.label}
                            autoOk={true}
                            textFieldStyle={{color: colors.TEXT}}
                            pedantic={true}
                            {...this.props}
                            />
      </div>
    );
  }
}
