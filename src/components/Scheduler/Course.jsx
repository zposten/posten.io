import React, { Component, PropTypes } from 'react'
import s from './Course.css'
import TextBox from '../TextBox/TextBox.jsx'
import AddButton from './AddButton.jsx'
import Close from '../Close/Close.jsx'

import Section from './Section.jsx'

export default class Course extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }

  id() {return this.props.id}

  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      sectionsCreated: 0,
    };
  }

  addSection(index) {
    console.log("addSection");
    let s = this.state.sections;
    if (index == undefined) index = s.length;

    // Insert at index, deleting 0 items first
    s.splice(index, 0,
      <Section key={this.state.sectionsCreated}
               remove={(toRemove) => this.removeSection(toRemove)}
               add={() => this.addSection(index + 1)}
               />
    );
    this.setState({
      sections: s,
      sectionsCreated: this.state.sectionsCreated + 1,
    });
  }

  removeSection(toRemove) {
    let index = this.state.sections.indexOf(toRemove);
    console.log("Removing section at index: " + index);
    this.setState({sections: this.state.sections.splice(index, 1)})
  }

  componentDidMount() {
    this.addSection();
  }

  render() {
    return (
      <div className={s.course}>
        <TextBox label="Course #"/>
        <div className={s.sectionWrapper}>
          {this.state.sections}
        </div>
        <AddButton onClick={this.props.add}/>
        <Close onClick={() => this.props.remove(this.props.id)}/>
      </div>
    );

  }
}
