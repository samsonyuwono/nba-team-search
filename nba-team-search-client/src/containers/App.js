import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Home from '../components/Home'
import TeamList from './TeamList'
import Players from './Players'
import TeamForm from '../components/TeamForm'
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
							  <Route exact path='/teams' component={TeamList}/>
                <Route exact path='/players' component={Players}/>
                <Route exact path='/new' component={TeamForm}/>
						   </div>
            </div>
      </Router>
    )
  }
}

export default App;
