import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Tile.css'

export default class Tile extends Component {
  static propTypes = {
    value: PropTypes.number,
    setValue: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      isCorrect: false,
      isIncorrect: false,
      lastReportedValue: 0,
    };
  }

  handleClick(e) {
    let clickCount = this.state.clickCount + 1;

    const defaultState = 0;
    const correctState = 1;
    const incorrectState = 2;
    const numPossibleStates = 3;

    let currentState = clickCount % numPossibleStates;
    let isCorrect = currentState == correctState;
    let isIncorrect = currentState == incorrectState;

    let currentValue = 0;
    if (isCorrect) currentValue = this.props.value;
    else if (isIncorrect) currentValue = -1 * this.props.value;

    this.props.setValue(this.state.lastReportedValue, currentValue);
    this.setState({
      clickCount,
      isCorrect,
      isIncorrect,
      lastReportedValue: currentValue
    });
  }

  render() {
    return (
      <div className={cx(s.tile,
                       {[s.correct]: this.state.isCorrect},
                       {[s.incorrect]: this.state.isIncorrect})}
           onClick={(e) => this.handleClick(e)}
      >
        ${this.props.value}
      </div>
    );
  }
}
