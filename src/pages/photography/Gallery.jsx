import React, { Component, PropTypes } from 'react'
import Photoswipe from 'photoswipe'
import PhotoswipeUI_Default from './photoswipe/photoswipe-ui-default'
import PhotoViewer from './photoswipe/PhotoViewer.jsx'
import Thumbnail from './Thumbnail.jsx'
import s from './styles.css'

export default class Gallery extends Component {

  static propTypes = {
    slides: React.PropTypes.array.isRequired,
    gid: React.PropTypes.number.isRequired,
  };

  openPhotoswipe(e, index) {
    // Don't navigate to the url on the anchor tag to go to flicker
    e.preventDefault();

    let pswpElement = document.querySelectorAll('.pswp')[0];
    let options = {index, galleryUID: this.props.gid};
    let gallery = new Photoswipe(pswpElement, PhotoswipeUI_Default,
                                 this.props.slides, index);
    gallery.init();
  }

  render() {
    // Parse width and height from size string
    for(let slide of this.props.slides) {
      let size = slide.size.split('x');
      slide.w = size[0];
      slide.h = size[1];
    }

    let photos = this.props.slides.map(function(slide, index) {
      return (
        <Thumbnail key={slide.src}
                   index={index}
                   size={slide.size}
                   caption={slide.caption}
                   largeImageUrl={slide.src}
                   smallImageUrl={slide.msrc}
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
