import { resetPlayerForm } from './playerForm';

const API_URL = process.env.REACT_APP_API_URL;

const setPlayers = players => {
  return {
    type: 'FETCH_PLAYERS',
    players
  }
}

const addPlayer = player => {
  return {
    type: 'CREATE_PLAYER_SUCCESS',
    player
  }
}

export const fetchPlayers = () => {
  return dispatch => {
    return fetch(`${API_URL}/players`)
      .then(response => response.json())
      .then(players => dispatch(setPlayers(players)))
      .catch(error => console.log(error));
  }
}

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
        dispatch(resetPlayerForm())
      })
      .catch(error => console.log(error))
  }
}
