import React, { Component } from 'react'
import NavLink from './NavLink'

export default class Navigation extends Component {

  render() {
    return (
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/photography">Photography</NavLink>
        <NavLink to="/apps">Applets</NavLink>
      </nav>
    );
  }

}
