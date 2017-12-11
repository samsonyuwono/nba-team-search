import React from 'react';
import PropTypes from 'prop-types';

const TeamPlayersList = ({players}) => {
  return (
    <div>
      <h3>Players</h3>
      <ul>
        {players.map(player =>
            <li key={player.id}>{player.name}</li>
          )}
      </ul>
    </div>
  );
};


TeamPlayersList.propTypes = {
  players: PropTypes.object.isRequired
};

export default TeamPlayersList;
