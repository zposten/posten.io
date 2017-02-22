import React, { Component } from 'react'
import { title, subtitle, html } from './bio.md'
import Markdown from '../../components/Markdown'

export default class Bio extends Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return <Markdown html={html} title={title} subtitle={subtitle} />;
  }

}

import * as sdl from './sdlArticle.md'
let SdlArticle =  (props) => <Markdown html={sdl.html} title={sdl.title} />;
export {SdlArticle};
