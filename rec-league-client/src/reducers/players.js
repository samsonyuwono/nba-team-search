export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return action.players;

    case 'CREATE_PLAYER_SUCCESS':
      return state.concat(action.player);

    case 'UPDATE_PLAYER_SUCCESS':
    debugger;
      const newPlayerState = state.map(player => {
        if (player.id === action.playerId) {
          return Object.assign({}, player, {player: player})
        } else {
          return player
        }
      })
      return newPlayerState

    case 'DELETE_PLAYER':
      return state.filter(s => s.id !== action.id)

    default:
      return state
    }
  }
