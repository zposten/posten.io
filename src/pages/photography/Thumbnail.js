import React, { Component, PropTypes } from 'react'
import s from './styles.css'

export default class Thumbnail extends Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    size: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string.isRequired,
    largeImageUrl: React.PropTypes.string.isRequired,
    smallImageUrl: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
  };

  render() {
    let tokens = this.props.size.split('x');
    let width = tokens[0];
    let height = tokens[1];

    return (
      <figure style={{width: 200 * width / height}}//, maxWidth: '500px'}}
              itemProp="associatedMedia"
              itemScope=""
              itemType="http://schema.org/ImageObject"
              className={s.wrapper}
              onClick={(e) => this.props.onClick(e, this.props.index)}>
        <a href={this.props.largeImageUrl}
           itemProp="contentUrl"
           className={s.link}>
          <img src={this.props.smallImageUrl}
               alt={this.props.caption}
               itemProp="thumbnail"
               className={s.image}
               ></img>
        </a>
      </figure>
    );
  }
}
