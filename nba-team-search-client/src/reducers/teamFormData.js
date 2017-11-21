export default (state= {
 name: '',
 championships: 0,
 logo_url: '',
 year_established: 0
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.teamFormData

    default:
      return state;
  }
}
