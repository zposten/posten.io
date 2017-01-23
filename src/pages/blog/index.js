import React, {Component, PropTypes} from 'react'
import s from './styles.css'
import Card from '../../components/Card/Card.jsx'

export default class BlogPage extends Component {

  static propTypes = {};

  componentDidMount() {
    document.title = "Blog";
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "The Blog",
      subtitle: "My thoughts, views, and opinions on technical and non-technical matters"
    }
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className={s.title}>{this.state.title}</h1>
        <h3 className={s.subtitle}>{this.state.subtitle}</h3>
        {this.props.children}
      </div>
    );
  }

}
