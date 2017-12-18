export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return action.players;

    case 'CREATE_PLAYER_SUCCESS':
      return state.concat(action.player);

    case 'UPDATE_PLAYER_SUCCESS':
      const player = action.player
      return {player: state.filter(s => s.id !== action.state.id).concat(state)}

    // case 'DELETE_PLAYER_SUCCESS':
    //   const players = state.players.filter(player => player.id !== player.id);
    //   return {...state, players}

    default:
      return state
    }
  }
