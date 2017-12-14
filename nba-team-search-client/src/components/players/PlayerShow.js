import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlayers } from '../../actions/players'

class PlayerShow extends Component {

  componentDidMount() {
    this.props.fetchPlayers()
  }

  render(){
    console.log(this.props)
    const playerShow = () => {
      const players = this.props.players
      const playerId = parseInt(this.props.match.params.id)
        const sortedPlayers = players.filter(player => player.id === playerId)
          return sortedPlayers.map(player=>{
            return(
        <div key={player.id}>
          <img className="PlayerShow" src={player.image_url} alt={player.name} /><br></ br>
            <label>{player.name}</label><input/><br></ br>
            Height: {player.height} cm
          </div>
          )
        })
      }
    return(
      <div>
      <h1> Player </h1>
      <h2>{playerShow()}</h2>
      <p>Edit Form?</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    players: state.players
  })
}

export default connect (mapStateToProps, { fetchPlayers })(PlayerShow);
