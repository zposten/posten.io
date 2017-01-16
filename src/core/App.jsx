import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
import store from './store'
import { Provider } from 'react-redux'

import Layout from '../components/Layout/Layout.jsx'
import Home from '../pages/home/index.js'
import Bio from '../pages/bio/index.js'
import Error from '../pages/error/index.js'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>\
            <Route path="/home" component={Home} />
            <Route path="/bio" component={Bio} />
          </Route>
          <Route path="/error" component={Error} />
        </Router>
      </Provider>
    );
  }
}


export default App
