import React, { Component } from 'react';
import PlayerForm from '../players/PlayerForm';
import { connect } from 'react-redux';

import { getTeams } from '../../actions/teams'
import { fetchPlayers } from '../../actions/players'

class TeamShow extends Component {

  componentDidMount() {
    this.props.getTeams()
    this.props.fetchPlayers()
  }

  render(){
    console.log(this.props)
    const teamShow = () => {
      const players = this.props.players
      const teamId = parseInt(this.props.match.params.id)
        const sortedPlayers = players.filter(player => player.team_id === teamId)
          return sortedPlayers.map(player=>{
            return(
          <div key={player.id}>
          <img className="PlayerShow" src={player.image_url} alt={player.name} /><br></br>
            {player.name}
            </div>
          )
        })
      }
    return(
      <div>
      <h1> Roster </h1>
      <h2>{teamShow()}</h2>
      < PlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    teams: state.teams,
    players: state.players
  })
}

export default connect (mapStateToProps, { getTeams, fetchPlayers })(TeamShow);
