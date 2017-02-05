import React, {Component, PropTypes} from 'react'
import s from './styles.css'
import Card from '../../components/Card/Card.jsx'

export default class BlogInitial extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      title: "The Blog",
      subtitle: "My thoughts, views, and opinions on technical and non-technical matters"
    }
  }

  componentDidMount() {
    document.title = "Blog";
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className={s.title}>{this.state.title}</h1>
        <h3 className={s.subtitle}>{this.state.subtitle}</h3>

        <div className={s.cards}>
          <div className={s.card}>
            <Card src="http://wupy101.com/wp-content/uploads/sites/61/t1larg.recipes.jpg"
                  title="Recipes"
                  summary="Delicious concotions you'll be itching to try!"
                  to="/blog/recipes/meals"
                  />
          </div>
          <div className={s.card}>
            <Card src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/move-to-ios-icon.png"
                  title="iOS posts"
                  summary="Issues I ran into during my first attampt at iOS development"
                  className={s.card}
                  to="/blog/ios"
                  />
          </div>
        </div>
      </div>
    );
  }

}
