import React, { Component, PropTypes } from 'react'
import PhotoViewer from './photoswipe/PhotoViewer.js'
import Gallery from './Gallery.js'
import slides from './slides'
import s from './styles.css'
import Collapsible from '../../components/Collapsible'

export default class PhotographyPage extends Component {

  componentDidMount() {
    document.title = "Photos";
  }

  render() {
    let galleries = Object.keys(slides).map(function(year, index) {
      let yearSlides = slides[year];
      return (
        <Collapsible title={year} key={year}>
          <Gallery slides={yearSlides} gid={index} />
        </Collapsible>
      );
    });
    // Get the most recent year first
    galleries.reverse();

    return (
      <div className={s.root}>
        {galleries}
        <PhotoViewer />
      </div>
    );
  }

}
