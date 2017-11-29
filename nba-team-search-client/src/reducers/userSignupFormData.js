const initialState = {
  username: '',
  email: '',
  password: '',
  password_confirmation: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.userSignupFormData;


    default:
      return state;
  }
}
