import React, { Component, PropTypes } from 'react'
import Gallery from './Gallery.jsx'
import Slides2015 from './slides-2015'
import Slides2016 from './slides-2016'
import s from './styles.css'

export default class PhotographyPage extends Component {

  componentDidMount() {
    document.title = "Photos";
  }

  render() {
    return (
      <div>
        <h1>2016</h1>
        <Gallery slides={Slides2016} gid={1} />
        <h1>2015</h1>
        <Gallery slides={Slides2015} gid={2} />
      </div>
    );
  }

}
