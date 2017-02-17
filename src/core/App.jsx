import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from '../components/Layout/Layout.jsx'
import Home from '../pages/home/index.js'
import Bio from '../pages/bio/index.js'
import Photography from '../pages/photography/index.js'
import Error from '../pages/error/index.js'

import Blog from '../pages/blog/index.jsx'
import BlogInitial from '../pages/blog/BlogInitial.jsx'
import BlogMeals from '../pages/blog/BlogMeals.jsx'

import Applets from '../pages/applets/index.js'
import Scheduler from '../pages/applets/Scheduler/SchedulerPage.jsx'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends Component {
  componentWillMount() {
    // Fast click library used by material-ui
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/bio" component={Bio} />
            <Route path="/blog" component={Blog}>
              <IndexRoute component={BlogInitial} />
              <Route path="/blog/recipes/meals" component={BlogMeals} />
              <Route path="/blog/recipes/meals/:meal" component={BlogMeals} />
              <Route path="/blog/recipes/meals/:meal/:recipe" component={BlogMeals} />
            </Route>
            <Route path="/photography" component={Photography} />
            <Route path="/photography&gid=:gid&pid=:pid" component={Photography} />
            <Route path="/apps" component={Applets}>
              <IndexRoute component={Scheduler} />
            </Route>
          </Route>
          <Route path="/error" component={Error} />
        </Router>
      </MuiThemeProvider>
    );
  }
}


export default App
