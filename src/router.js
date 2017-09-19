import React, { Component } from 'react';
import {Router, Route} from 'react-router'
import history from './router/history'
import Welcome from './containers/welcome'
import Blog from './containers/blog'
import NewBlog from './containers/newBlog'

class App extends Component {
  render() {
    return (
      <Router history={history}>

       <div>
         <Route exact path="/" component={Welcome}/>
         <Route exact path="/blog" component={Blog}/>
         <Route exact path="/blog/new" component={NewBlog}/>
       </div>
      
      </Router>
    );
  }
}

export default App;
