export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return action.players;

    case 'CREATE_PLAYER_SUCCESS':
      return state.concat(action.player);

    case 'UPDATE_PLAYER_SUCCESS':
      return {player: state.filter(s => s.id !== action.state.id).concat(state)}

    case 'DELETE_PLAYER':
      return {player: state.filter(s => s.id !== action.id)}

    default:
      return state
    }
  }
