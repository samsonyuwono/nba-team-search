const API_URL = process.env.REACT_APP_API_URL;
//**Action creators **
const setTeams = teams => {
  return {
    type: 'GET_TEAMS_SUCCESS',
    teams
  }
}
// ** Async Actions **
export const getTeams = () => {
  return dispatch => {
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(teams => dispatch(setTeams(teams)))
      .catch(error => console.log(error));
  }
}

export const createTeam = team => {
  debugger;
  return dispatch => {
    return fetch(`${API_URL}/teams`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(team)
    })
    .then(response=> response.json())
    .then(team => {
        debugger
      })
    .catch(error => console.log(error))
  }
}
