import React, { Component, PropTypes } from 'react'
import s from './Section.css'

import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'
import Time from './Time/Time.jsx'



export default class Section extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      times: [],
      timesCreated: 0,
    };
  }

  addTime(index) {
    console.log("addTime");
    let t = this.state.times;
    if (index == undefined) index = t.length;

    // Insert at index, deleting 0 items first
    t.splice(index, 0,
      <Time key={this.state.timesCreated}
            remove={(toRemove) => this.removeTime(toRemove)}
            add={() => this.addTime(index + 1)}
            />
    );
    this.setState({
      time: t,
      timesCreated: this.state.timesCreated + 1,
    });
  }

  removeTime(toRemove) {
    let index = this.state.times.indexOf(toRemove);
    console.log("Removing time at index: " + index);
    this.setState({times: this.state.times.splice(index, 1)})
  }

  componentDidMount() {
    this.addTime();
  }

  render() {
    return (
      <div className={s.section}>
        <div className={s.row}>
          <TextBox label="Section #" className={s.sectionNum} fullWidth={true}/>
          <div className={s.times}>{this.state.times}</div>
        </div>
        <div className={s.row}><AddButton onClick={this.props.add}/></div>

        <Close onClick={() => this.props.remove(this)}/>
      </div>
    );

  }
}
