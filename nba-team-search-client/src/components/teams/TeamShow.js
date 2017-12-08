import React from 'react';
import PlayerForm from '../players/PlayerForm';
import PropTypes from 'prop-types';

const TeamShow = ({team, players}) => {
  const teamPlayers = players.filter(player => player.team.id === team.id)

    const teamShow = teamPlayers.map(player =>{
      return <div key={player.id}>
        {player.name}
      </div>
    }
  )
 };


TeamShow.propTypes = {
  team: PropTypes.string,
  players: PropTypes.string
}




export default TeamShow;
