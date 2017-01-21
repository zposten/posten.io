import React, {Component, PropTypes} from 'react'
import s from './styles.css'
import Card from '../../components/Card/Card.jsx'

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
            <Card src="http://restaurants-stlouismo.com/wp-content/uploads/2016/04/Pancake-Breakfast.jpg"
                  title="Breakfast"
                  summary="The most importnat meal of the day"
                  to="/blog/recipes/meals/breakfast"
                  />
          </div>
          <div className={s.card}>
            <Card src="http://www.westportwhiskeyandwine.com/wp-content/uploads/2012/11/dinner.jpg"
                  title="Not Breakfast"
                  summary="The meal that you just can't wait to get home for"
                  className={s.card}
                  to="/blog/recipes/meals/dinner"
                  />
          </div>
        </div>
      </div>
    );
  }

}
