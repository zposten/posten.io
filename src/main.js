import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/App';
import deepForceUpdate from 'react-deep-force-update'
import FastClick from 'fastclick';


const rootEl = document.getElementById('app');
let instance = ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

global.forceUpdate = () => deepForceUpdate(instance)

if (module.hot) {
  module.hot.accept('./core/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./core/App').default;
    instance = ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}


// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);
