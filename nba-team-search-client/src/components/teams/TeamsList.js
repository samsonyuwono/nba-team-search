import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeamCard from './TeamCard';
import TeamForm from './TeamForm';
import { getTeams } from '../../actions/teams'
import './Teams.css'


class TeamList extends Component {

  componentDidMount() {
    this.props.getTeams()
  }
  render() {
    return (
    <div className= "TeamsContainer">
      <h1>Teams</h1>
      {this.props.teams.map(team => <TeamCard key={team.id} team=
        {team} />)}
        <TeamForm />
   </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    teams: state.teams
  })
}

export default connect(mapStateToProps, { getTeams })(TeamList);
