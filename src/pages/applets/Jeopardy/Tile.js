import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Tile.css'

export default class Tile extends Component {
  static propTypes = {
    text: PropTypes.string,
    setValue: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      isCorrect: false,
      isIncorrect: false,
      isValue: Number.isInteger(props.text),
      value: Number(props.text),
    };
  }

  handleClick(e) {
    if (!this.state.isValue) return;
    let clickCount = this.state.clickCount + 1;

    const defaultState = 0;
    const correctState = 1;
    const incorrectState = 2;
    const numPossibleStates = 3;

    let currentState = clickCount % numPossibleStates;
    let isCorrect = currentState == correctState;
    let isIncorrect = currentState == incorrectState;

    let currentValue = 0;
    if (isCorrect) currentValue = this.state.value;
    else if (isIncorrect) currentValue = -1 * this.state.value;

    this.props.setValue(currentValue);
    this.setState({clickCount, isCorrect, isIncorrect})
  }

  render() {


    return (
      <div className={cx(s.tile,
                       {[s.category]: !this.state.isValue},
                       {[s.correct]: this.state.isCorrect},
                       {[s.incorrect]: this.state.isIncorrect})}
           onClick={(e) => this.handleClick(e)}
      >
        {this.props.text}
      </div>
    );
  }
}
