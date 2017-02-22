import React, { Component, PropTypes } from 'react'
import PhotoViewer from './photoswipe/PhotoViewer.js'
import Gallery from './Gallery.js'
import Slides2015 from './slides/slides-2015'
import Slides2016 from './slides/slides-2016'
import s from './styles.css'
import Collapsible from '../../components/Collapsible'

export default class PhotographyPage extends Component {

  componentDidMount() {
    document.title = "Photos";
  }

  render() {
    return (
      <div className={s.root}>
        <Collapsible title="2016">
          <Gallery slides={Slides2016} gid={1} />
        </Collapsible>
        <Collapsible title="2015">
          <Gallery slides={Slides2015} gid={2} />
        </Collapsible>

        <PhotoViewer />
      </div>
    );
  }

}
