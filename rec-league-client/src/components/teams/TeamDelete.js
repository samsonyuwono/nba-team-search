import React from 'react';

import { withRouter } from 'react-router-dom'

const TeamDelete = ({ history, deleteTeam, teamId }) => (
  <button
    type="button"
    onClick={() => {
    deleteTeam(teamId)
    history.push('/teams')}
      }
  >
  Delete Team
  </button>
);

// TeamDelete.propTypes = {
//   history: React.PropTypes.shape({
//     push: React.PropTypes.func.isRequired,
//   }).isRequired,
// };

export default withRouter(TeamDelete);
