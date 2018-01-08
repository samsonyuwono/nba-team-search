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
        const newWinState = state.map(team => {
          if (team.id === action.teamId) {
            return Object.assign({}, team, {wins: action.wins +1})
          } else {
            return team
          }
        } )
      return newWinState

      case 'INCREASE_LOSS':
        const newLossState = state.map(team => {
          if (team.id === action.teamId) {
            return Object.assign({}, team, {losses: action.losses +1})
          } else {
            return team
          }
        })
        return newLossState

      default:
        return state
    }
  }
