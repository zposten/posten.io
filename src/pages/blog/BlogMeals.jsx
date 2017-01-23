import React, {Component, PropTypes} from 'react'
import s from './styles.css'
import markdownStyle from '../../utils/markdown.css'
import Card from '../../components/Card/Card.jsx'

import * as Breakfast from './recipes/breakfast.md'
import * as omelet from './recipes/recipe-omelet.md'
import * as frenchToast from './recipes/recipe-french-toast.md'

import * as Dinner from './recipes/dinner.md'
import * as bbqChicken from './recipes/recipe-bbq-chicken.md'
import * as chickenAndRice from './recipes/recipe-chicken-and-rice.md'
import * as goulash from './recipes/recipe-goulash.md'
import * as potRoast from './recipes/recipe-guinness-pot-roast.md'
import * as tacoPasta from './recipes/recipe-one-pot-taco-pasta.md'
import * as pizza from './recipes/recipe-pizza.md'
import * as mashedPotatoes from './recipes/recipe-mashed-potatoes.md'


export default class BlogMeals extends Component {

  static propTypes = {};

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

    let title = null;
    let subtitle = null;

    if (!params.meal) {
      cards = [
        tree.breakfast.index,
        tree.dinner.index
      ];

      title = "Which meal are we cooking for?"
    } else if (!params.recipe) {
        cards = tree[params.meal].recipes;
    }

    if (cards) {
      let cardsHtml = Object.values(cards).map(function(card) {
        return (
          <div className={s.card} key={card.url}>
            <Card src={card.src} title={card.title} summary={card.subtitle} to={card.url} />
          </div>
        );
      });
      return (
        <div>

          <div className={s.cards}>{cardsHtml}</div>
        </div>
      );
    }

    // Create the markdown for the specified recipe!
    let recipe = tree[params.meal].recipes[params.recipe];
    return (
      <div>
        <h1>{recipe.title}</h1>
        <h3>{recipe.subtitle}</h3>
        <div className={markdownStyle.markdown} dangerouslySetInnerHTML={{ __html: recipe.html }} />
      </div>
    );


  }

}
