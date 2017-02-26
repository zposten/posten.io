import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import s from './Gameboard.css'
import Tile from './Tile'

export default class Gameboard extends Component {
  static propTypes = {
    values: PropTypes.array,
    categories: PropTypes.array,
    setValue: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      cols: {},
      value: 0,
    };

    //props.values.sort((a, b) => a - b);
    for (let category of props.categories) {
      this.state.cols[category] = props.values.slice();
    }
  }

  setValue(delta) {
    this.setState({value: this.state.value + delta});
  }

  render() {
    // let ATile = (text) => <Tile text={text} setValue={(val) => this.setValue(val)} />

    let categoryRow = this.props.categories.map(category => (
      <th><Tile text={category} setValue={(val) => this.setValue(val)} /></th>
    ));
    let valueRows = this.props.values.map(function(value) {
      let rowData = [];
      for (let category of this.props.categories) {
        rowData.push(
          <td key={category}>
            <Tile text={value} setValue={(val) => this.setValue(val)} />
          </td>
        );
      }
      return <tr key={value}>{rowData}</tr>;
    }, this);

    return (
      <table>
        <tr>{categoryRow}</tr>
        {valueRows}
      </table>
    );
  }
}
