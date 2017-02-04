import React, { Component, PropTypes } from 'react'
import Gallery from './Gallery.jsx'
import PhotoObjects from './photos'
import s from './styles.css'

export default class PhotographyPage extends Component {

  componentDidMount() {
    document.title = "Photos";
  }

  render() {
    return (
      <div>
        <Gallery photoObjects={PhotoObjects} />
      </div>
    );
  }

}
