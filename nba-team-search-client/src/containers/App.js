import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../components/Home'

import TeamsList from './teams/TeamsList';
import TeamShow from '../components/teams/TeamShow';
import PlayersList from './players/PlayersList';
import TeamForm from '../components/teams/TeamForm'
import PlayerForm from '../components/players/PlayerForm'
import Navbar from '../components/Navbar'

import './../assets/App.css'

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
							  <Route exact path='/teams' component={TeamsList}/>
                <Route path='/teams/:id' component={TeamShow}/>
                <Route exact path='/teams/new' component={TeamForm}/>
                <Route exact path='/players' component={PlayersList}/>
                <Route exact path='/players/new' component={PlayerForm}/>
						   </div>
            </div>
          </Switch>
      </Router >
    )
  }
}

export default App;
