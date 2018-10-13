import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            You went to an invalid Route.
          </p>
          <p>
            <Link className="App-link" to="/">Home</Link>
          </p>
        </header>
      </div>
    );
  }
}

export default About;