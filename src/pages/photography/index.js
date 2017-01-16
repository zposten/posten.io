import React, { Component, PropTypes } from 'react'
import s from './styles.css'

export default class PhotographyPage extends Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = "Photos";
  }

  render() {
    return (
      <div>
        Photography page
      </div>
    );
  }

}
