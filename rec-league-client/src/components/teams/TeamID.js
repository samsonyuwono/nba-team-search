import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../../actions/teams'

class TeamID extends Component {

  componentDidMount(){
    this.props.getTeams()
  }

  render() {
    console.log(this.props.teams)
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
      <h3>Team ID </h3>
      <h5>{teamIds()}</h5>
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
