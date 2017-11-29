import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../components/Home'
import Teams from './Teams'
import Players from './Players'
import Navbar from '../components/Navbar'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
						<div className="main-header">
							<div className="inner">
								<Navbar/>
								<h1 className="main-title">The Rec League Portal</h1>
							</div>
						</div>
            	<div className="main-content">
              <Route exact path='/' component={Home}/>
							<Route exact path='/teams' component={Teams}/>
              <Route exact path='/about' component={Players}/>
						    </div>
            </div>
      </Router>
    )
  }
}

export default App;
