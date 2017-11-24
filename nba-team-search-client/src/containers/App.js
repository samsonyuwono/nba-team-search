import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
	Switch
} from 'react-router-dom';

import Teams from './Teams'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

import './App.css'

class App extends Component {
      //{insert nav bar above everything}
  render() {
    return (
      <Router>
        <Switch>
            <div className="App">
              <Navbar />
              
              <Home />
              <Teams />
            </div>
        </Switch>
      </Router>
    )
  }
}

export default App;
