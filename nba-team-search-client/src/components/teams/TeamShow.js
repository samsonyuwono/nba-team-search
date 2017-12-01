import React from 'react';
import { connect } from 'react-redux';

const TeamShow = ({team, players}) => {
  return (
    <div clasName="teamShow">
      <h1>This is a show page</h1>
      <ul>
        <li>{team.name}</li>
        <li>{team.players}</li>
      </ul>
    </div>
  )
}

// const mapStateToProps = (state, ownProps) => {
//   const team = state.teams.teams.find(team => team.id == ownProps.match.params.teamId)
//     if(team) {
//       return {
//         team,
//         players: state.players.players
//       }
//     } else {
//       return { team: {} }
//     }
// }

export default TeamShow;
