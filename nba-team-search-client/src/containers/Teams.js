import React from 'react';
import './Teams.css'

const Teams = (props) => (
  <div className= "TeamsContainer">
    <h3> NBA Teams </h3>
    {props.teams.map(team =>
    <div className="TeamCard">
      <h3>{team.name}</h3>
      <p>Championships: {team.championships}</p>
      <img  className="TeamImage" src={team.logo_url} alt={team.name}/>
      <p>Year Established: {team.year_established}</p>
    </div>
    )}
  </div>
)

export default Teams;
