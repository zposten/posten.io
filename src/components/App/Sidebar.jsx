import React from 'react';
import Navigation from './Navigation.jsx';
import s from './Sidebar.css';
import cx from 'classnames';

class Header extends React.Component {

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className={s.sidebarWrapper}>
        <div className={cx(s.sidebar)}>
          <div className={s.picwrapper}>
            <img className={s.pic} src="../../../circle-web.png"/>
          </div>
          <Navigation/>
        </div>
        <div className={s.shading} onClick={this.props.toggleNav}/>
      </div>
    );
  }

}

export default Header;
