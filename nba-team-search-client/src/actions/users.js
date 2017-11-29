const API_URL = process.env.REACT_APP_API_URL;

const addUser = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

export const createUser = user => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ user: user})
    })
    .then(response => response.json())
    .then(team => {
      dispatch(addUser(user))
    })
    .catch(error => console.log(error))
  }
}
