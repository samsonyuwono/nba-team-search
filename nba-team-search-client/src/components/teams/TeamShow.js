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
    const { match:  params } = this.props
    const teamId = this.props.match.params.id

    console.log(this.props)

    return(
      <div className="PlayerInfo">
      <h1> Roster </h1>

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
