const API_URL = process.env.REACT_APP_API_URL;

const setPlayers = players => {
  return {
    type: 'GET_PLAYERS_SUCCESS',
    players
  }
}

const addPlayer = player => {
  return {
    type: 'CREATE_PLAYER_SUCCESS',
    player
  }
}

export const getPlayers = () => {
  return dispatch => {
    return fetch(`${API_URL}/players`)
    .then(response => response.json())
    .then(players=> dispatch(setPlayers(players)))
    .catch(error => console.log(error))
  }
}
//put debugger in getPlayers
export const createPlayer = player => {
  return dispatch => {
    return fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ player: player })
    })
      .then(response => response.json())
      .then(player => {
        dispatch(addPlayer(player))
      })
      .catch(error => console.log(error))
  }
}
