

import React, { Component } from 'react'
import s from './Layout.css'
import Sidebar from './Nav/Sidebar.jsx'
import Footer from './Footer.jsx'
import TopBar from './TopBar.jsx'
import sidebarStyle from './Nav/Sidebar.css'

export default class App extends Component {
  toggleNav() {
    let sidebar = document.querySelector('.' + sidebarStyle.sidebarWrapper);
    sidebar.classList.toggle(sidebarStyle.hidden);
  }

  render() {
    return (
      <div className={s.root}>
        <TopBar toggleNav={this.toggleNav} />
        <main className={s.main}>
          <div className={s.pageWrap}>
            {this.props.children}
          </div>
          <Footer />
        </main>
        <Sidebar toggleNav={this.toggleNav}/>
      </div>
    );
  }
}
