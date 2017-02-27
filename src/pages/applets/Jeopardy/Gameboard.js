import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Gameboard.css'
import Tile from './Tile'
import CategoryTile from './CategoryTile'

export default class Gameboard extends Component {
  static propTypes = {
    values: PropTypes.array,
    categories: PropTypes.array,
    setValue: PropTypes.func,
    round: PropTypes.number,
    score: PropTypes.number,
    setScore: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      // cols: {},
      value: 0,
    };

    //props.values.sort((a, b) => a - b);
    // for (let category of props.categories) {
    //   this.state.cols[category] = props.values.slice();
    // }
  }

  setValue(oldDelta, newDelta) {
    let newScore = this.props.score - oldDelta + newDelta;
    this.props.setScore(newScore);
  }

  render() {
    let categoryRow = this.props.categories.map((category, index) => (
      <th key={index} style={{height: '100%'}}>
        <CategoryTile
          text={category}
          setCategory={(c) => this.props.setCategory(index, c)}
          tabIndex={index + 500 * this.props.round}/>
      </th>
    ));
    let valueRows = this.props.values.map(function(value, vId) {
      let rowData = [];
      for (let i=0; i<this.props.categories.length; ++i) {
        rowData.push(
          <td key={`${vId}, ${i}`}>
            <Tile value={value} setValue={(o,n) => this.setValue(o,n)} />
          </td>
        );
      }
      return <tr key={value}>{rowData}</tr>;
    }, this);

    return (
      <div>
        <table>
          <thead><tr>{categoryRow}</tr></thead>
          <tbody>{valueRows}</tbody>
        </table>
      </div>
    );
  }
}
