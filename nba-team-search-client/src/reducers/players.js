export default (state =[], action) => {
  switch(action.type) {

    case 'GET_PLAYERS_SUCCESS':
     return {loading: false, players: action.payload.players}

    default:
      return state;
  }
}
