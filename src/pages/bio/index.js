import React, { Component } from 'react'
import cx from 'classnames'
import s from './styles.css'
import { title, subtitle, html } from './bio.md'
import markdownStyle from '../../utils/markdown.css'

export default class Bio extends Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className={cx(s.content, markdownStyle.container)}>
        <h1 className={markdownStyle.title}>{title}</h1>
        <h3 className={markdownStyle.subtitle}>{subtitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }}
             className={ markdownStyle.markdown } />
      </div>
    );
  }

}
