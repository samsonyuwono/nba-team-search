const initialState = {
  name: '',
  height: 0,
  weight: 0,
  image_url:'',
  team_id: 0
}

export default (state= initialState, action) => {

  switch(action.type) {
    case 'UPDATED_PLAYER_FORM':
      return action.playerFormData;

    // case 'UPDATE_PLAYER_SUCCESS':
    //   const player = action.currentState
    //   return { players: player.filter(player => player.id !== action.player.id).concat(player)}

    case 'RESET_PLAYER_FORM':
      return initialState;

    default:
      return state;
  }
}
