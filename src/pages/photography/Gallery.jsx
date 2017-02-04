import React, { Component, PropTypes } from 'react'
import Photoswipe from 'photoswipe'
import PhotoswipeUI_Default from './photoswipe/photoswipe-ui-default'
import PhotoViewer from './photoswipe/PhotoViewer.jsx'
import PhotoObjects from './photos'
import Photo from './Photo.jsx'
import s from './styles.css'

export default class Gallery extends Component {

  static propTypes = {
    photoObjects: React.PropTypes.array.isRequired
  };

  openPhotoswipe(e, index) {
    // Don't navigate to the url on the anchor tag to go to flicker
    e.preventDefault();

    let pswpElement = document.querySelectorAll('.pswp')[0];
    let gallery = new Photoswipe(pswpElement, PhotoswipeUI_Default,
                                 this.props.photoObjects, {index});
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
               onClick={(e, index) => this.openPhotoswipe(e, index)} />
      );
    }, this);

    return (
      <div>
        <div className={s.gallery}>{photos}</div>
        <PhotoViewer />
      </div>
    );
  }

}
