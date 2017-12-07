import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../components/Home'

import TeamsList from './teams/TeamsList';
import TeamShow from '../components/teams/TeamShow';
import TeamForm from '../components/teams/TeamForm'
import PlayersList from './players/PlayersList';
import PlayerForm from '../components/players/PlayerForm'
import PlayerShow from '../components/players/PlayerShow';
import Navbar from '../components/Navbar'

import './../assets/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
					<Navbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/teams/new' component={TeamForm}/>
              <Route exact path='/teams/:teamid' component={TeamShow}/>
							 <Route exact path='/teams' component={TeamsList}/>
               <Route exact path='/players' component={PlayersList}/>
              <Route exact path='/players/new' component={PlayerForm}/>

            </Switch>
            </div>
      </Router >
    )
  }
}

export default App;
