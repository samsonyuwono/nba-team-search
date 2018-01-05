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
      // debugger;
      const wins = state.filter(s => s.id === action.id)
      return state.concat(wins)

    case 'INCREASE_LOSS':
    const losses = state.filter(s => s.id === action.id)
      return state.concat(losses)


    default:
      return state;
  }
}
