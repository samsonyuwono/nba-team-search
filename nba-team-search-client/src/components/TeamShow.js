import React from 'react';
import TeamCard from './TeamCard'

const TeamShow = ({team, players}) => {
  return (
    <div>
        <TeamCard team={team} players={players}/>
      </div>
  )
}

export default TeamShow;
