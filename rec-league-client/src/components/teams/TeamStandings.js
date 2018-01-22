import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTeams } from '../../actions/teams'

class TeamStandings extends Component{

  componentDidMount(){
    this.props.getTeams()
  }

  render(){
      const sortedTeamWins = this.props.teams.sort((a,b) => { return b.wins - a.wins})
      const teamStandings = sortedTeamWins.map(team => {
        return <p key={team.id}>{team.name} {team.wins} - {team.losses}</p>
      });
    return(
    <div className="TeamStandings">
      <h1>Standings</h1>
      <div>
        {teamStandings}
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    teams: state.teams
  })
}

export default connect (mapStateToProps, {getTeams})(TeamStandings)
