import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
// import './netlify-cms-setup'
// import NetlifyCMS from './NetlifyCMS'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
