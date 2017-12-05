import React from 'react';




const TeamShow = (props) => {

  function getTeam(){
    console.log(props.player)
    // const teamPlayers = props.player.filter(player => player.team.id === props.team.id)
    //   return teamPlayers.map(player =>{
    //     <div key={player.id}>
    //       {player.name}
    //     </div>
    }


  return (
    <div className="TeamShow">
      <h1>This is a show page</h1>
        {getTeam()}
    </div>
  )
}


// }

export default TeamShow;
