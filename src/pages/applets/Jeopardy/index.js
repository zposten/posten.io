import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Jeopardy.css'
import {title, subtitle} from './Jeopardy.md'
import colors from '../../../utils/colors'

import Gameboard from './Gameboard'
import TextBox from '../../../components/TextBox'
import FlatButton from 'material-ui/FlatButton';

export default class Jeopardy extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      categories: {
        1: Array(6).fill(''),
        2: Array(6).fill('')
      },
      scores: {1: 0, 2: 0},
      wajor: 0,
      finalScore: 0,
      finalCorrect: undefined,
    };
  }

  setCategory(round, categoryId, value) {
    this.state.categories[round][categoryId] = value;
    this.setState({categories: this.state.categories});
  }

  setScore(round, score) {
    this.state.scores[round] = score;
    this.setState({scores: this.state.scores});
  }

  handleWajor(wajorText) {
    let wajor = Number(wajorText);
    if (isNaN(wajor)) return;
    this.setState({wajor})
  }

  handleFinal(correct) {
    let multiplier = correct ? 1 : -1;
    let scores = this.state.scores;
    this.setState({
      finalCorrect: correct,
      finalScore: scores[1] + scores[2] + this.state.wajor * multiplier,
    });
  }

  render() {
    const values = {
      1: [200, 400, 600, 800, 1000],
      2: [400, 800, 1200, 1600, 2000]
    }

    let boards = Object.keys(values).map((round) => (
      <div>
        <Gameboard categories={this.state.categories[round]}
                   values={values[round]}
                   setCategory={(cId, val) => this.setCategory(round, cId, val)}
                   round={round}
                   score={this.state.scores[round]}
                   setScore={(score) => this.setScore(round, score)}
                   />
        <div className={s.score}>
          Score for the {round == 2 ? 'Double ' : ''}Jeopardy round is: ${this.state.scores[round]}
        </div>
      </div>
    ))

    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>{title}</h1>
        <h3 className={s.subtitle}>{subtitle}</h3>

        {boards}

        <h1 className={s.finalTitle}>Final Jeopardy</h1>
        <div className={s.totalScore}>
          Total score from both rounds: ${this.state.scores[1] + this.state.scores[2]}
        </div>
        <TextBox label="Wajor" onChange={(e, val) => this.handleWajor(val)}/>
        <div className={s.finalButtons}>
          <FlatButton label="I got it right!"
                      backgroundColor={colors.GREEN}
                      hoverColor="green"
                      onClick={() => this.handleFinal(true)}
                      style={{color: 'white'}}/>
          <FlatButton label="I got it wrong =("
                      backgroundColor={colors.RED}
                      hoverColor="red"
                      onClick={() => this.handleFinal(false)}
                      style={{color: 'white', marginLeft: '10px'}}/>
        </div>
        <div className={cx(s.finalScore, {[s.hideFinalScore]: this.state.finalCorrect === undefined})}>
          <h1>Final Score</h1>
          <h2 className={s.finalScoreValue}>${this.state.finalScore}</h2>
        </div>
      </div>
    );
  }
}
