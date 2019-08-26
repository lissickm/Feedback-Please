import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Success from "../Success/Success";
import './bootstrap copy.css';


class App extends Component {
  render() {
    return (
      <Router>

        {/* this header will exist on all the pages 
        even after the route changes */}
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i class="tagline">Do not forget it!</i></h4>
          </header>
          <br />

          {/* make some routes for the different feedback areas */}
          <Route exact path='/' component={Feeling} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/review' component={Review} />
          <Route path='/success' component={Success} />
        </div>
      </Router >
    );
  }
}

// just in case...make the reduxstore availavle
const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(App);
