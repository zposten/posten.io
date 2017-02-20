import React, { Component } from 'react'
import cx from 'classnames'
import { title, subtitle, html } from './bio.md'
import s from './style.css'
import mds from '../../utils/markdown.css'
import Markdown from '../../components/Markdown'

export default class Bio extends Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Markdown html={html}
                title={title}
                subtitle={subtitle} />
    );
  }

}
