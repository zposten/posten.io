import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import s from './Sidebar.css';
import cx from 'classnames';

class Sidebar extends Component {

  render() {
    return (
      <div className={s.sidebarWrapper}>
        <div className={cx(s.sidebar)}>
          <div className={s.picwrapper}>
            <img className={s.pic} src="../../../images/zach-circle-web.png"/>
          </div>
          <Navigation/>
        </div>
        <div className={s.shading} onClick={this.props.toggleNav}/>
      </div>
    );
  }

}

export default Sidebar;
