import React from 'react';
import Navigation from './Navigation.jsx';
import Link from '../Link/Link.jsx';
import s from './Sidebar.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className={s.sidebar}>
        <div className={s.picwrapper}>
          <img className={s.pic} src="../../../zach-circle-web.png"/>
        </div>
        <Navigation/>
      </div>
    );
  }

}

export default Header;