import { resetPlayerForm } from './playerForm';

const API_URL = process.env.REACT_APP_API_URL;

const setPlayers = players => {
  return {
    type: 'FETCH_PLAYERS',
    players
  }
}

const  setPlayerData = playerId => {
  return {
    type: 'FETCH_PLAYER_SUCCESS',
    playerId
  }
}

const addPlayer = player => {
  return {
    type: 'CREATE_PLAYER_SUCCESS',
    player
  }
}

const updatePlayer = player => {
  return {
    type: 'UPDATE_PLAYER_SUCCESS',
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

export const fetchPlayer = (playerId) => {
  return dispatch => {
    return fetch(`${API_URL}/players/${playerId}`)
    .then(response => response.json())
    .then(player => dispatch(setPlayerData(player)))
    .catch(error => console.log(error))
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

export const editPlayer = (playerId) => {
  debugger;
  return dispatch => {
    return fetch(`${API_URL}/players/${playerId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playerId : playerId })
    })
      .then(response => response.json())
      .then(player => {
        dispatch(updatePlayer(player))
      })
      .catch(error => console.log(error))
  }
}

// export const updatePlayer = (state, playerId) => {
//   return dispatch => {
//     return fetch(`http://localhost:3001/api/players/${playerId}`, {
//       method: 'PATCH',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         player: {
//           name: state.name,
//           height: state.height,
//           weight: state.weight,
//           image_url: state.image_url,
//         }
//       })
//     }).then(response  => {
//       return response.json()
//     }).then(responseJson => {
//       dispatch({type: 'UPDATE_PLAYER_SUCCESS', payload: responseJson})
//     }).catch(e => {
//       console.log(e)
//     })
//   }
// }
