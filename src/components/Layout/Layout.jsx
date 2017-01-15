/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import Sidebar from './Sidebar.jsx';
import Footer from '../Footer/Footer.jsx';
import TopBar from './TopBar.jsx';
import s from './Layout.css';
import { s as sidebarStyle } from './Sidebar.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  toggleNav() {
    var sidebar = document.getElementsByClassName(sidebarStyle.sidebar);
    sidebar.classList.toggle()
  }

  render() {
    return (
      <div ref={node => (this.root = node)} className={s.root}>
        <TopBar toggleNav={this.toggleNav} />
        <main className={s.main}>
          <div {...this.props} className={cx(this.props.className, s.content)} />
          <Footer />
        </main>
        <Sidebar/>
      </div>
    );
  }
}

export default Layout;
