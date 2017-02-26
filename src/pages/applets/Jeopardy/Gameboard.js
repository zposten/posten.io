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
    let newValue = this.state.value - oldDelta + newDelta;
    this.setState({value: newValue});
  }

  render() {
    // let ATile = (props) => (
    //   <Tile text={props.text}
    //         setValue={(oldVal, newVal) => this.setValue(oldVal, newVal)} />
    // );

    let categoryRow = this.props.categories.map((category, index) => (
      <th key={index}>
        <CategoryTile
          text={category}
          setCategory={(c) => this.props.setCategory(index, c)}/>
      </th>
    ));
    let valueRows = this.props.values.map(function(value) {
      let rowData = [];
      for (let category of this.props.categories) {
        rowData.push(
          <td key={category}>
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

        <div>The value currently is {this.state.value}</div>
      </div>
    );
  }
}
