import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router'
import {Provider} from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <MuiThemeProvider>
	        <Router />
	     </MuiThemeProvider>
	    </Provider>
    );
  }
}

export default App;
