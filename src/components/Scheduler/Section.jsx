import React, { Component, PropTypes } from 'react'
import s from './Section.css'

import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'
import Time from './Time/Time.jsx'



export default class Section extends Component {
  static propTypes = {
    remove: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {times: [<Time key={0} />]};
  }

  addTime() {
    let t = this.state.times;
    t.push(
      <Section key={t.length}
               remove={() => this.removeTime(t.length)}
               />
    );
    this.setState({time: t});
  }

  removeTime(index) {
    this.setState({times: this.state.times.splice(index, 1)})
  }

  render() {
    return (
      <div className={s.section}>
        <div className={s.row}>
          <TextBox label="Section #" className={s.sectionNum} fullWidth={true}/>
          <div className={s.times}>{this.state.times}</div>
        </div>
        <div className={s.row}><AddButton /></div>

        <Close />
      </div>
    );

  }
}
