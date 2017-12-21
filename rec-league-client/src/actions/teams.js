import { resetTeamForm } from './teamForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setTeams = teams => {
  return {
    type: 'GET_TEAMS_SUCCESS',
    teams
  }
}

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

export const getTeams = () => {
  return dispatch => {
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(teams => dispatch(setTeams(teams)))
      .catch(error => console.log(error));
  }
}

export const createTeam = team => {
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
      })
      .catch(error => console.log(error))
  }
}

export const editTeam = (teamId, team) => {
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

export const deleteTeam = (teamId, history) => {
  return dispatch => {
    return fetch(`${API_URL}/teams/${teamId}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teamId : teamId })
    })
    .then(response => response.json())
    .then(team => {
      dispatch(destroyTeam(teamId))
    })
    .catch(error => console.log(error))
   }
 }
