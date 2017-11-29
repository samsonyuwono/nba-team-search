import React from 'react';

import {Link} from 'react-router-dom';



const TeamCard = ({ team }) => (
  <div key={team.id} className="TeamCard">
    <h3>{team.name}</h3>
    <p>Wins: {team.wins}</p>
    <p>Losses: {team.losses} </p>
    <img className="TeamImage" src={team.logo_url} alt={team.name} />
    <Link style={{ marginBottom: '5px'}} to={`/teams/${team.id}`}>Click here</Link>

  </div>
)
  //{link to players page here}

export default TeamCard;
