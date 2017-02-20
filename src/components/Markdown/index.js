import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Markdown.css'
import mds from '../../utils/markdown.css'
import u from '../../utils'

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

  generateInfo(author, date) {
    if (author && date) {
      return `BY ${u.up(author)} ON ${u.up(date)}`
    } else if (author) {
      return 'BY ' + u.up(author);
    } else if (date) {
      return u.up(date);
    }
  }


  render() {
    let imageStyle = { backgroundImage: `url(${this.props.src})` };
    let imageClass = cx(
      s.titleImage,
      this.props.titleImageClassName,
      {[s.hidden]: !this.props.src}
    );

    let info = (this.p)

    return (
      <div className={cx(s.wrapper, this.props.className)}>
        <h1 className={cx(s.title, this.props.titleClassName)}>{this.props.title}</h1>
        <h4 className={s.info}>{this.generateInfo(this.props.author, this.props.date)}</h4>
        <h3 className={cx(s.subtitle, this.props.subtitleClassName)}>{this.props.subtitle}</h3>
        <div className={imageClass} style={imageStyle}></div>

        <div className={cx(mds.markdown)}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </div>
      </div>
    );
  }

}
