import React, { Component } from 'react'
import cx from 'classnames'
import { title, subtitle, html } from './bio.md'
import s from './bio-style.css'
import mds from '../../utils/markdown.css'

export default class Bio extends Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className={cx(s.content, mds.markdown)}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

}
