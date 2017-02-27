import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from '../components/Layout'
import Home from '../pages/home'
import Bio, {SdlArticle} from '../pages/bio'
import Photography from '../pages/photography'
import Error from '../pages/error'

import BlogIndex from '../pages/blog'
import Recipes from '../pages/blog/recipes'
import RecentPosts from '../pages/blog/tech/RecentPosts'
import BlogPost from '../pages/blog/tech/BlogPost'

import AppChooser from '../pages/applets/AppChooser'
import Scheduler from '../pages/applets/Scheduler/SchedulerPage'
import Jeopardy from '../pages/applets/Jeopardy'

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
            <Route path="/bio">
              <IndexRoute component={Bio} />
              <Route path="/bio/sdl-article" component={SdlArticle} />
            </Route>
            <Route path="/blog">
              <IndexRoute component={BlogIndex} />
              <Route path="/blog/recipes/meals" component={Recipes} />
              <Route path="/blog/recipes/meals/:meal" component={Recipes} />
              <Route path="/blog/recipes/meals/:meal/:recipe" component={Recipes} />
              <Route path="/blog/tech">
                <IndexRoute component={RecentPosts} />
                <Route path="/blog/tech/:postId" component={BlogPost} />
              </Route>
            </Route>
            <Route path="/photography" component={Photography} />
            <Route path="/photography&gid=:gid&pid=:pid" component={Photography} />
            <Route path="/apps">
              <IndexRoute component={AppChooser} />
              <Route path="/apps/scheduler" component={Scheduler}/>
              <Route path="/apps/jeopardy" component={Jeopardy}/>
            </Route>
          </Route>
          <Route path="/error" component={Error} />
        </Router>
      </MuiThemeProvider>
    );
  }
}


export default App
