import React from 'react';
import {Link} from 'react-router-dom';

const TeamCard = ({ team }) => (
  <div key={team.id} className="TeamCard">
    <h3>{team.name}</h3>
    <p>Team Number: {team.id}</p>
    <p>Wins: {team.wins}</p>
    <p>Losses: {team.losses} </p>
    <img className="TeamImage" src={team.logo_url} alt={team.name} />
    <div>
      <Link style={{ marginBottom: '5px'}} to={`/teams/${team.id}`}>Roster</Link> <br />
      <Link style={{ marginBottom: '5px'}} to={`/teams/${team.id}/edit`}>Edit Team</Link>
    </div>
  </div>
)


export default TeamCard;
