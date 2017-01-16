import React, { Component, PropTypes } from 'react'
import s from './styles.css'

export default class ContactPage extends Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = "Contact";
  }

  render() {
    return (
      <div>
        Contact page
      </div>
    );
  }

}
