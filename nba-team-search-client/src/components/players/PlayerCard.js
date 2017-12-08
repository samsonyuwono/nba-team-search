import React from 'react';
import {Link} from 'react-router-dom';

const PlayerCard = ({ team, player }) => (
  <div key={player.id} className="PlayerCard">
    <h3>{player.name}</h3>
    <p>Height(cm): {player.height}</p>
    <p>Weight(lb): {player.weight} </p>
    <img className="PlayerImage" src={player.image_url} alt={player.name} />
    <div>
      <Link style={{ marginBottom: '5px'}} to={`/players/${player.id}`}>Click here</Link> <br />
      <Link style={{ marginBottom: '5px'}} to={`/players/${player.id}/edit`}>Edit Player</Link>
    </div>
  </div>
)


export default PlayerCard;
