import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../../actions/teams'

class TeamID extends Component {

  componentDidMount(){
    this.props.getTeams()
  }

  render() {
    const teamIds = () => {
      const teams = this.props.teams
      return teams.map(team =>{
        return(
          <div key={team.id}>
            TeamID({team.id}) {team.name}
            </div>
          )
        })
      }
    return(
      <div>
      <p>Team ID </p>
      {teamIds()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps, { getTeams })(TeamID)
