import React, { Component, PropTypes } from 'react'
import Photoswipe from 'photoswipe'
import PhotoswipeUI_Default from './photoswipe/photoswipe-ui-default'
import Lightbox from './photoswipe/Lightbox.jsx'
import PhotoObjects from './photos'
import Photo from './Photo.jsx'
import s from './styles.css'

export default class PhotographyPage extends Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = "Photos";
  }

  openPhotoswipe(e, zindex) {
    // Don't navigate to the url on the anchor tag to go to flicker
    e.preventDefault();

    let pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {index: zindex};
    let gallery = new Photoswipe(pswpElement, PhotoswipeUI_Default, PhotoObjects, options);
    gallery.init();
  }

  render() {
    let photos = PhotoObjects.map(function(photo, index) {
      return (
        <Photo key={photo.src}
               index={index}
               size={photo.size}
               title={photo.caption}
               largeImageUrl={photo.src}
               smallImageUrl={photo.msrc}
               onMyClick={this.openPhotoswipe} />
      );
    }, this);

    return (
      <div>
        <div className={s.gallery}>{photos}</div>
        <Lightbox />
      </div>
    );
  }

}
