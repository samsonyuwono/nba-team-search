import fetch from 'isomorphic-fetch';
const API_URL = process.env.REACT_APP_API_URL;

const setPlayers = players => {
  return {
    type: 'GET_PLAYERS_SUCCESS',
    players
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
