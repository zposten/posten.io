/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import store from './core/store';

import App from './components/App/App.jsx'
import Home from './pages/home/index.js'
import About from './pages/about/index.js'
import Error from './pages/error/index.js'

// function renderComponent(component) {
//   ReactDOM.render(<Provider store={store}>{component}</Provider>,
//     document.getElementById('container'));
// }

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>\
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Route>
    <Route path="/error" component={Error} />
  </Router>
), document.getElementById('container'));


// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);
