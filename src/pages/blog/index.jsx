import React, {Component, PropTypes} from 'react'
import s from './styles.css'
import Card from '../../components/Card/Card.jsx'

export default class BlogPage extends Component {

  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        { this.props.children }
      </div>
    );
  }

}
