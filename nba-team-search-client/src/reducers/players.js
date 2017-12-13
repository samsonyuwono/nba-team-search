export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return action.players;

    case 'CREATE_PLAYER_SUCCESS':
      return state.concat(action.player);

    case 'FETCH_PLAYER':
        return action.player;

    case 'UPDATE_PLAYER_SUCCESS':
      return { players: state.filter(state => state.id !== action.player.id).concat(action.player)}

    default:
      return state
    }
  }
