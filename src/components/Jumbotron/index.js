import React, { PropTypes }from 'react'
import s from './Jumbotron.css'
import cx from 'classnames'

export default class Jumbotron extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className={s.jumbotron}>
        <div className={s.title}>{this.props.title}</div>
        <div className={s.subtitle}>{this.props.subtitle}</div>
      </div>
    );
  }

}
