import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
// import s from './Jeopardy.css'
import Gameboard from './Gameboard'

export default class Jeopardy extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      categories: {
        1: ['these', 'are', 'six', 'diferent', 'jeopardy', 'categories'],
        2: [],
      }
    };
  }

  setCategory(round, index, value) {
    this.state.categories[round][index] = value;
    this.setState({categories: this.state.categories});
  }

  render() {
    const values = {
      1: [200, 400, 600, 800, 1000],
      2: [400, 800, 1200, 1600, 2000]
    }

    return (
      <Gameboard categories={this.state.categories[1]}
                 values={values[1]}
                 setCategory={(i, val) => this.setCategory(1, i, val)}/>
    );
  }
}
