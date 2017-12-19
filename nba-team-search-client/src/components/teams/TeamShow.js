import React, { Component } from 'react';
import PlayerForm from '../players/PlayerForm';
import { connect } from 'react-redux';

import { getTeams } from '../../actions/teams'
import { fetchPlayers } from '../../actions/players'
import { deleteTeam } from '../../actions/teams'

class TeamShow extends Component {

  componentDidMount() {
    this.props.getTeams()
    this.props.fetchPlayers()
  }

  handleOnClick = () => {
    const teamId = this.props.match.params.id
    this.props.deleteTeam(teamId)
    console.log("deleted!")
  }

  render(){
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
      <button onClick={this.handleOnClick}>Delete Team</button>
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

export default connect (mapStateToProps, { getTeams, fetchPlayers, deleteTeam })(TeamShow);
