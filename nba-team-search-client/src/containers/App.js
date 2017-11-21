import React, { Component } from 'react';

import Teams from './Teams.js'
import './App.css'

const API_URL = process.env.REACT_APP_API_URL;
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/teams`)
      .then(resp => resp.json())
      .then(teams => this.setState({ teams }))
  }
  render() {
    console.log(this.state)

    return (

      <div className="App">
        <Teams teams={this.state.teams}/>
      </div>
    )
  }
}

export default App;
