export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TEAMS_SUCCESS':
      return action.teams;

    case 'CREATE_TEAM_SUCCESS':
      return state.concat(action.team);

    case 'UPDATE_TEAM_SUCCESS':
      const team = state.filter(s => s.id === action.state.id)
      return  team.filter(t => t.id !== t.state.id).concat(state)

    case 'DELETE_TEAM':
      return state.filter(s => s.id !== action.id)

      case 'INCREASE_WIN':
  //get id of team here then plus one to team win use state
      const win = state.filter(s=> s.id === action.id)
        const teamWins = action.team.wins
        return {...
          state,
          wins: teamWins + 1
        }
    default:
      return state;
  }
}
