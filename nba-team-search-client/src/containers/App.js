import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
	Switch
} from 'react-router-dom';

import Teams from './Teams'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import SignupPage from './SignupPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
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
              <Route exact path='/signup' component={SignupPage}/>
						    </div>
            </div>
        </Switch>
      </Router>
    )
  }
}

export default App;
