import { resetTeamForm } from './teamForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setTeams = teams => {
  return {
    type: 'GET_TEAMS_SUCCESS',
    teams
  }
}

// const setTeam = team => {
//   return {
//     type: 'GET_TEAM_SUCCESS',
//     team
//   }
// }

const addTeam = team => {
  return {
    type: 'CREATE_TEAM_SUCCESS',
    team
  }
}

const updateTeam = teamFormData => {
  return {
    type: 'UPDATE_TEAM_SUCCESS',
    teamFormData
  }
}

const destroyTeam = teamId => {
  return {
    type: 'DELETE_TEAM',
    teamId
  }
}

export const incrementWin= teamId => {
  return {
    type: 'INCREASE_WIN',
    teamId
  }
}

export const incrementLoss = teamId =>{
  return {
    type: 'INCREASE_LOSS',
    teamId
  }
}

export const getTeams = () => {
  return dispatch => {
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(teams => dispatch(setTeams(teams)))
      .catch(error => console.log(error));
  }
}

export const getTeam = teamId => {
  return dispatch => {
    return fetch(`${API_URL}/teams/${teamId}`)
        .then(response => response.json())
        .then(team => dispatch(setTeams(team)))
        .catch(error => console.log(error));
    }
}

export const createTeam = (team, history) => {
  return dispatch => {
    return fetch(`${API_URL}/teams`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ team: team })
    })
      .then(response => response.json())
      .then(team => {
        dispatch(addTeam(team))
        dispatch(resetTeamForm())
        history.push('/teams')
      })
      .catch(error => console.log(error))
  }
}

export const editTeam = (teamId, team) => {
  debugger;
  return dispatch => {
    return fetch(`${API_URL}/teams/${teamId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ team: team })
    })
      .then(response => response.json())
      .then(team => {
        dispatch(updateTeam(team))
      })
      .catch(error => console.log(error))
  }
}


export const deleteTeam = (teamId) => {
  return dispatch => {
    return fetch(`${API_URL}/teams/${teamId}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(team => {
        dispatch(destroyTeam(teamId))
      })
      .catch(error => console.log(error))
  }
}

export const increaseWin = (wins, teamId) => {
  const addWin = Object.assign({}, teamId, {wins: wins + 1})

  return dispatch => {
    return fetch(`${API_URL}/teams/${teamId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addWin)
    })
      .then(response => response.json())
      .then(team => {
        dispatch(incrementWin(wins, teamId))
      })
      .catch(error => console.log(error))
  }
}

export const increaseLoss = (losses, teamId) => {
  const addLoss = Object.assign({}, teamId, {losses: losses + 1})

  return dispatch => {
    return fetch(`${API_URL}/teams/${teamId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addLoss)
    })
      .then(response => response.json())
      .then(team => {
        dispatch(incrementLoss(losses, teamId))
      })
      .catch(error => console.log(error))
  }
}
