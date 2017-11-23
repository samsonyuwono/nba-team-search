export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TEAMS_SUCCESS':
      return action.teams;

    case 'CREATE_TEAM_SUCCESS':
      return state.concat(action.team);

    default:
      return state;
  }
}
