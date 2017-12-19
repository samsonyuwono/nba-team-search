import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { fetchPlayers } from '../../actions/players'
import { deletePlayer } from '../../actions/players'

class PlayerShow extends Component {

  componentDidMount() {
    this.props.fetchPlayers()
  }

  handleOnClick = () => {
    const playerId = this.props.match.params.id
    this.props.deletePlayer(playerId)
    {<Redirect to="/players" />}
  }

  render(){
    console.log(this.props.players)
    const playerShow = () => {
      const players = this.props.players
      const playerId = parseInt(this.props.match.params.id)
        const sortedPlayers = players.filter(player => player.id == playerId)
        if (players === null){
          return <Redirect to='/players'/>;
        }
        else{
          return sortedPlayers.map(player=>{
            return(
        <div key={player.id}>
          <img className="PlayerShow" src={player.image_url} alt={player.name} /><br></ br>
            <label>{player.name}</label>
            <br></ br>
            Height: {player.height} cm
            <br></ br>
            Height: {player.weight} lb
          </div>
            )
          })
        }
      }
    return(
      <div>
      <h1> Player </h1>
      <h2>{playerShow()}</h2>
      <button onClick={this.handleOnClick} >Delete Player</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    players: state.players
  })
}

export default connect (mapStateToProps, { fetchPlayers, deletePlayer })(PlayerShow);
