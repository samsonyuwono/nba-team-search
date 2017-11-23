import React from 'react';

const TeamCard = ({ team }) => (
  <div key={team.id} className="TeamCard">
    <h3>{team.name}</h3>
    <p>Championships: {team.championships}</p>
    <p>Year Established: {team.year_established} </p>
    <img className="TeamImage" src={team.logo_url} alt={team.name} />
  </div>
)

export default TeamCard;
