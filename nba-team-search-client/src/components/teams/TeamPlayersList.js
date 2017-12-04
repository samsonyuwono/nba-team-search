import React from 'react';
import {Link} from 'react-router-dom'

const TeamPlayersList = (props) => {
  function listPlayers() {
    const sortedPlayers = props.players.filter(player => player.team.id === props.team.id)
    return sortedPlayers.map(player => {
      return (
        <div key={player.id} >
          <Link style={{ marginRight: '12px' }} to={`/players/${player.id}`}>{player.name}</Link>
        </div>
      )
    })
  }
  return (
    <div>
      {listPlayers()}
    </div>
  )
}

export default TeamPlayersList;
