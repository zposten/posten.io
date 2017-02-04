import React, { Component, PropTypes } from 'react'
import s from './styles.css'

export default class Photo extends Component {
  static propTypes = {
    index: React.PropTypes.number,
    size: React.PropTypes.string,
    title: React.PropTypes.string,
    largeImageUrl: React.PropTypes.string,
    smallImageUrl: React.PropTypes.string
  };

  render() {
    let tokens = this.props.size.split('x');
    let width = tokens[0];
    let height = tokens[1];

    return (
      <figure data-index={this.props.index}
              style={{width: 200 * width / height}}
              itemProp="associatedMedia"
              itemScope=""
              itemType="http://schema.org/ImageObject"
              className={s.wrapper}>
        <a href={this.props.largeImageUrl}
           data-size={this.props.size}
           data-index={this.props.index}
           itemProp="contentUrl"
           className={s.link}>
          <img src={this.props.smallImageUrl}
               alt={this.props.title}
               itemProp="thumbnail"
               className={s.image}/>
        </a>
      </figure>
    );
  }
}
