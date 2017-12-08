export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS':
      return action.players

    case 'CREATE_PLAYER_SUCCESS':
      return state.concat(action.player);

    default:
      return state
    }
  }
