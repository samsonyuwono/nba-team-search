const initialState = {
  name: '',
  height: 0,
  weight: 0,
  image_url:'',
  team_id: 0
}

export default (state= initialState, action) => {

  switch(action.type) {
    case 'UPDATED_FORM':
      return action.playerFormData;

    case 'RESET_PLAYER_FORM':
      return initialState;

    default:
      return state;
  }
}