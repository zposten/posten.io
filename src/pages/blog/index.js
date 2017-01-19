import React, { Component, PropTypes } from 'react'
import s from './styles.css'
import Card from '../../components/Card/Card.jsx'

export default class BlogPage extends Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = "Blog";
  }

  render() {
    return (
      <div>
        Blog page <br/><br/><br/>

        <div className={s.cards}>
          <Card src="http://wupy101.com/wp-content/uploads/sites/61/t1larg.recipes.jpg"
                title="Recipes"
                summary="Delicious concotions you'll be itching to try!"
                className={s.card}/>
          <Card src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/move-to-ios-icon.png"
                title="iOS posts"
                summary="Issues I ran into during my first attampt at iOS development"
                className={s.card}/>

          <Card title="zach" summary="zach" />
        </div>
      </div>
    );
  }

}
