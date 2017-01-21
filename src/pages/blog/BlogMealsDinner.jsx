import React, {Component, PropTypes} from 'react'
import s from './styles.css'
import Card from '../../components/Card/Card.jsx'

import { html, title, subtitle, url, src } from './recipes/recipe-chicken-and-rice.md'

export default class BlogInitial extends Component {

  static propTypes = {};

  componentDidMount() {
    document.title = "Blog";
  }

  render() {
    return (
      <div>
        <div className={s.cards}>
          <div className={s.card}>
            <Card src={src}
                  title={title}
                  summary={subtitle}
                  to={url}
                  />
          </div>
        </div>
      </div>
    );
  }

}
