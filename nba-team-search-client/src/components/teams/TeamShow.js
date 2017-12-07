import React from 'react';
import PlayerForm from '../players/PlayerForm';


const TeamShow = (props) => {


    console.log(props.player)
    // const teamPlayers = props.player.filter(player => player.team.id === props.team.id)

    //   const teamShow = teamPlayers.map(player =>{
    //     return <div key={player.id}>
    //       {player.name}
    //     </div>
    //   }
    // )



  return (
    <div className="TeamShow">

      <h1>This is a show page</h1>
        {TeamShow}
        <PlayerForm/>
    </div>
  )
}




export default TeamShow;
