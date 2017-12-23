export default (state = {}, action) => {
    switch(action.type) {
        case 'GET_TEAM_SUCCESS':
            return action.team;
        case 'UPDATED_TEAM_SUCCESS':
            return action.team;
        default:
            return state;
    }
}
