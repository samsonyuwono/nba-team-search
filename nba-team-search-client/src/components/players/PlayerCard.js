import React from 'react';
import {Link} from 'react-router-dom';

const PlayerCard = ({ player }) => (
  <div key={player.id} className="PlayerCard">
    <h3>{player.name}</h3>
    <p>Wins: {player.wins}</p>
    <p>Losses: {player.losses} </p>
    <img className="PlayerImage" src={player.logo_url} alt={player.name} />
    <div>
      <Link style={{ marginBottom: '5px'}} to={`/players/${player.id}`}>Click here</Link>
    </div>
  </div>
)


export default PlayerCard;
