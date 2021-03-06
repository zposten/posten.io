import React, {Component, PropTypes} from 'react'
import cx from 'classnames'

import s from '../Blog.css'
import Markdown from '../../../components/Markdown'
import Card from '../../../components/Card'

import * as Breakfast from './markdown/breakfast.md'
import * as omelet from './markdown/recipe-omelet.md'
import * as frenchToast from './markdown/recipe-french-toast.md'
import * as Dinner from './markdown/dinner.md'
import * as bbqChicken from './markdown/recipe-bbq-chicken.md'
import * as chickenAndRice from './markdown/recipe-chicken-and-rice.md'
import * as goulash from './markdown/recipe-goulash.md'
import * as potRoast from './markdown/recipe-guinness-pot-roast.md'
import * as tacoPasta from './markdown/recipe-one-pot-taco-pasta.md'
import * as pizza from './markdown/recipe-pizza.md'
import * as mashedPotatoes from './markdown/recipe-mashed-potatoes.md'


export default class BlogMeals extends Component {

  static propTypes = {
    setTitle: PropTypes.func
  };

  componentDidMount() {
    document.title = "Blog";
  }

  createRecipeTree() {
    return {
      breakfast: {
        index: Breakfast,
        recipes: { omelet, frenchToast }
      },
      dinner: {
        index: Dinner,
        recipes: {
          bbqChicken, chickenAndRice, goulash, potRoast, tacoPasta,
          pizza, mashedPotatoes
        }
      }
    };
  }

  render() {

    let tree = this.createRecipeTree();
    let params = this.props.params;
    let cards = null;
    let titleText = "Which meal are we cooking for?";

    if (!params.meal) {
      cards = [
        tree.breakfast.index,
        tree.dinner.index
      ];
    } else if (!params.recipe) {
        titleText = "What are we cooking?";
        cards = tree[params.meal].recipes;
    }

    if (!params.meal || !params.recipe) {
      let cardsHtml = Object.values(cards).map(function(card) {
        return (
          <div className={s.card} key={card.url}>
            <Card src={card.src} title={card.title} summary={card.subtitle} to={card.url} />
          </div>
        );
      });

      // Render the meal selection screen
      return (
        <div>
          <h1 className={s.title}>{titleText}</h1>
          <div className={s.cards}>{cardsHtml}</div>
        </div>
      );
    }

    // Create the markdown for the specified recipe!
    let recipe = tree[params.meal].recipes[params.recipe];
    return (
      <Markdown title={recipe.title}
                subtitle={recipe.subtitle}
                src={recipe.src}
                html={recipe.html}
                />
    );


  }

}
