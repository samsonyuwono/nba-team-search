import { resetPlayerForm } from './playerForm';
import { updatePlayerSuccess } from './playerEditForm'
// import { updatePlayerFormData } from './playerForm';

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

const updatePlayer = playerFormData => {
  return {
    type: 'UPDATE_PLAYER_SUCCESS',
    playerFormData
  }
}

// const removePlayer = playerId => {
//   return {
//     type: 'DELETE_PLAYER_SUCCESS',
//     playerId: playerId
//   }
// }

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

export const editPlayer = (playerId, player) => {
  return dispatch => {
    return fetch(`${API_URL}/players/${playerId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ player: player })
    })
      .then(response => response.json())
      .then(player => {
        dispatch(updatePlayerSuccess(player))
      })
      .catch(error => console.log(error))
  }
}

// export const deletePlayer = (playerId, player) => {
//   return dispatch => {
//     return fetch(`${API_URL}/players/${playerId}`, {
//       method: "DELETE",
//     }).then(response =>{
//       dispatch()
//     })
//   }
// }
