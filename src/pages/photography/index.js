import React, { Component, PropTypes } from 'react'
import Photoswipe from 'photoswipe'
import PhotoswipeUI_Default from './photoswipe/photoswipe-ui-default'
import Lightbox from './photoswipe/Lightbox.jsx'
import Photos from './photos'
import s from './styles.css'

export default class PhotographyPage extends Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = "Photos";

    let pswpElement = document.querySelectorAll('.pswp')[0];
    let gallery = new Photoswipe(pswpElement, PhotoswipeUI_Default, Photos);
    gallery.init()
  }

  render() {
    return (
      <Lightbox />
    );
  }

}
