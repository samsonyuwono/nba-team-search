import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${API_URL}/users`, userData)
  }
}
