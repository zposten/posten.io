import React from 'react';
import NavLink from '../NavLink/NavLink.jsx';

class Navigation extends React.Component {

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/photography">Photography</NavLink>
        <NavLink to="/apps">Applets</NavLink>
      </nav>
    );
  }

}

export default Navigation;
