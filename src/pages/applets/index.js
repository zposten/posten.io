import React, { Component, PropTypes } from 'react'
import s from './styles.css'

export default class AppletsPage extends Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = "Applets";
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }

}
