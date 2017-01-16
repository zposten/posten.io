

import React from 'react'
import s from './App.css'
import Sidebar from './Sidebar.jsx'
import Footer from '../Footer/Footer.jsx'
import TopBar from './TopBar.jsx'

export default class App extends React.Component {



  render() {
    return (
      <div className={s.root}>
        <TopBar toggleNav={this.toggleNav} />
        <main className={s.main}>
          {this.props.children}
          <Footer />
        </main>
        <Sidebar toggleNav={this.toggleNav}/>
      </div>
    );
  }
}
