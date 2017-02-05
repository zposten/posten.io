import React, {Component, PropTypes} from 'react'
import s from './blog-styles.css'
import Card from '../../components/Card/Card.jsx'

export default class BlogPage extends Component {

  static propTypes = {};

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

}
