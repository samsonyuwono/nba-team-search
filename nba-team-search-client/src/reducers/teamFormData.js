const initialState = {
   name: '',
   championships: 0,
   logo_url: '',
   year_established: 0
}
export default (state= initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.teamFormData

    case 'RESET_TEAM_FORM':
      return state;

    default:
      return state;
  }
}
