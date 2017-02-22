import React, { PropTypes } from 'react'
import s from './styles.css'
import { title, subtitle, html } from './home.md'
import Jumbotron from '../../components/Jumbotron'

class HomePage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div>
        <Jumbotron title={title} subtitle={subtitle} />
        <div className={s.content}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    );
  }

}

export default HomePage;
