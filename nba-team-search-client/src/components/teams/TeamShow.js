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
    const teamShow = () => {
      const players = this.props.players
      const teamId = this.props.match.params.id
        const sortedPlayers = players.filter(player => player.team_id == teamId)
          return sortedPlayers.map(player=>{
            return(
          <div key={player.id}>
            <p>{player.name}</p>
          </div>
        )
    })
  }


    return(
      <div>
      <h1> Roster </h1>
      <p>{teamShow()}</p>
      < PlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    teams: state.teams,
    players: state.players
  })
}

export default connect (mapStateToProps, { getTeams, fetchPlayers })(TeamShow);
