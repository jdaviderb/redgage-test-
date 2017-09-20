import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router'
import history from './router/history'
import Welcome from './containers/welcome'
import Blog from './containers/blog'
import NewBlog from './containers/newBlog'
import ShowBlog from './containers/showBlog'
class App extends Component {
  render() {
    return (
      <Router history={history}>

	      <Switch> 
	        <Route exact path="/" component={Welcome} />
	        <Route exact path="/blog/" component={Blog} />
	        <Route exact path="/blog/new" component={NewBlog} />
	        <Route exact path="/blog/:id" component={ShowBlog}/>
	      </Switch> 
 
      </Router>
    )
  }
}

export default App
