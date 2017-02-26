import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
// import s from './Jeopardy.css'
import Gameboard from './Gameboard'

export default class Jeopardy extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let categories = ['these', 'are', 'six', 'diferent', 'jeopardy', 'categories'];
    let values = [200, 400, 600, 800, 1000];

    return (
      <Gameboard categories={categories} values={values} />
    );
  }
}
