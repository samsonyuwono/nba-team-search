// import React from 'react';
//
// const TeamPlayersList = () => {
//   const {match: params } = this.props
//   const allPlayers = this.props.players
//     console.log(allPlayers)
//   const teamId = parseInt(this.props.match.params.id)
//     const sortedTeamPlayers = allPlayers.filter(player => player.team_id === teamId)
//     if (sortedTeamPlayers.length === 0){
//       return(
//         <p>Please add players to your roster in the form below.</p>
//       )
//     }
//     else{
//       return sortedTeamPlayers.map(player=>{
//         return(
//       <div key={player.id}>
//       <img className="PlayerShow" src={player.image_url} alt={player.name} /><br></br>
//       {player.name}
//       </div>
//       )
//     })
//   }
// }
//
// export default TeamPlayersList;
