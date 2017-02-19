import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Markdown.css'
import mds from '../../utils/markdown.css'

export default class Markdown extends Component {
  static propTypes = {
    html: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
    titleImageClassName: PropTypes.string
  }


  render() {
    let imageStyle = { backgroundImage: `url(${this.props.src})` };
    let imageClass = cx(
      s.titleImage,
      this.props.titleImageClassName,
      {[s.hidden]: !this.props.src}
    );

    return (
      <div className={cx(s.wrapper, this.props.className)}>
        <h1 className={cx(s.title, this.props.titleClassName)}>{this.props.title}</h1>
        <h3 className={cx(s.subtitle, this.props.subtitleClassName)}>{this.props.subtitle}</h3>
        <div className={imageClass} style={imageStyle}></div>

        <div className={cx(mds.markdown)}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </div>
      </div>
    );
  }

}
