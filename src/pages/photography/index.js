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

    let pswpElement = document.querySelectorAll('.pswp')[0];
    let gallery = new Photoswipe(pswpElement, PhotoswipeUI_Default, PhotoObjects);
    // gallery.init()
  }

  render() {
    let photos = PhotoObjects.map(function(photo, index) {
      return (
        <Photo key={photo.src}
               index={index}
               size={photo.size}
               title={photo.caption}
               largeImageUrl={photo.src}
               smallImageUrl={photo.msrc} />
      );
    });

    return (
      <div>
        <div className={s.gallery}>{photos}</div>
        <Lightbox />
      </div>
    );
  }

}
