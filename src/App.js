import React, { Component } from 'react';
import UsersList from './components/Users/UsersList';
import PostsList from './components/Posts/PostsList';
import Blog from './components/Blog/Blog';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch> 
            <Route exact path="/" component={UsersList}/>
            <Route exact path="/:userId/posts" component={PostsList}/>
            <Route exact path="/:userId/posts/:postId" component={Blog}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
