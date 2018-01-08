import React from 'react';
import {Link} from 'react-router-dom';
import TeamWinLoss from './TeamWinLoss'

const TeamCard = ({ team }) => (
  <div key={team.id} className="TeamCard">
    <h3>{team.name}</h3>
    <img className="TeamImage" src={team.logo_url} alt={team.name} />
    <div>
      <Link style={{ marginBottom: '5px'}} to={`/teams/${team.id}`}>Roster</Link> <br />
      <Link style={{ marginBottom: '5px'}} to={`/teams/${team.id}/edit`}>Edit Team</Link> <br />
<<<<<<< HEAD


      <TeamWinLoss team={team.id} wins={team.wins} losses={team.losses}/>
=======
      <TeamWinLoss team={team.id} wins={team.wins} losses={team.losses}/>

>>>>>>> 115c535d82cfc88ee611419f431232a1d88b1396
    </div>
  </div>
)


export default TeamCard;
