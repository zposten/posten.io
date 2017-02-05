import React, { Component } from 'react'
import cx from 'classnames'
import { title, subtitle, html } from './bio.md'
import markdownStyle from '../../utils/markdown.css'

export default class Bio extends Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className={cx(s.content, markdownStyle.markdown)}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }

}
