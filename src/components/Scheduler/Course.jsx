import React, { Component, PropTypes } from 'react'
import s from './Course.css'
import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'

import Section from './Section.jsx'

export default class Course extends Component {
  static propTypes = {
    remove: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {sections: [<Section key={0} />]};
  }

  addSection() {
    let s = this.state.sections;
    s.push(
      <Section key={s.length}
               remove={() => this.removeSection(s.length)}
               />
    );
    this.setState({sections: s});
  }

  removeSection(index) {
    this.setState({sections: this.state.sections.splice(index, 1)})
  }

  render() {
    return (
      <div className={s.course}>
        <TextBox label="Course #"/>
        <div className={s.sectionWrapper}>
          {this.state.sections}
        </div>
        <AddButton />
        <Close />
      </div>
    );

  }
}
