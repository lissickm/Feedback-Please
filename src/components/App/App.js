import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Do not forget it!</i></h4>
          </header>
          <br />

        <Route exact path='/' component={Feeling}/>
        </div>
      </Router >
    );
  }
}

export default App;
