import React, { Component, PropTypes } from 'react'
import s from './styles.css'

export default class BlogPage extends Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = "Blog";
  }

  render() {
    return (
      <div>
        Blog page
      </div>
    );
  }

}
