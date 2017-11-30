import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../components/Home'

import TeamsPage from './teams/TeamsPage';
import PlayersList from '../components/players/PlayersList';
import TeamForm from '../components/teams/TeamForm'
import Navbar from '../components/Navbar'

import './../assets/App.css'

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
							  <Route exact path='/teams' component={TeamsPage}/>
                <Route exact path='/players' component={PlayersList}/>
                <Route exact path='/new' component={TeamForm}/>
						   </div>
            </div>
      </Router>
    )
  }
}

export default App;
