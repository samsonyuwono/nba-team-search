import React from 'react';

const TeamCard = ({ team }) => (
  <div key={team.id} className="TeamCard">
    <h3>{team.name}</h3>
    <p>Wins: {team.wins}</p>
    <p>Losses: {team.losses} </p>
    <img className="TeamImage" src={team.logo_url} alt={team.name} />
  </div>
)

export default TeamCard;
