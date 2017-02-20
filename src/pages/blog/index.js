import React, {Component, PropTypes} from 'react'
import s from './Blog.css'
import Card from '../../components/Card'

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
            <Card src="http://akns-images.eonline.com/eol_images/Entire_Site/2014231/rs_560x415-140331104353-1024.cooking-tips-seasonings.jpg"
                  title="Recipes"
                  summary="Delicious concotions you'll be itching to try!"
                  to="/blog/recipes/meals"
                  />
          </div>
          <div className={s.card}>
            <Card src="http://www.rpost.com/wp-content/uploads/2017/01/Tech-1.png"
                  title="Technology"
                  summary="My experience with all things technical"
                  className={s.card}
                  to="/blog/tech"
                  />
          </div>
        </div>
      </div>
    );
  }

}
