import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePlayerFormData } from '../../actions/playerForm'
import { fetchPlayers } from '../../actions/players'
import { editPlayer } from '../../actions/players'


class PlayerEditForm extends Component {
  componentWillMount(){
    this.props.fetchPlayers()
  }

  componentDidMount(){
    const allPlayers = this.props.players
    const currentPlayer = this.props.match.params.id
    const playerFormData = allPlayers.filter(allPlayer => allPlayer.id === currentPlayer)
    this.props.updatePlayerFormData(playerFormData)
  }

  handleOnChange = event => {
    const { name, value } = event.target
    const currentPlayerFormData = Object.assign({}, this.props.playerFormData, {
      [name]: value
    })
    this.props.updatePlayerFormData(currentPlayerFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const playerId = this.props.match.params.id
    this.props.editPlayer(playerId, this.props.playerFormData)
  }

  render() {
    return(
      <div className ="editPlayerForm">
      <h1>Update your player</h1>
      <form onSubmit = {event => this.handleOnSubmit(event) }>
      <label htmlFor="playerName">Player Name: </label>
        <input
        type="text"
        name="name"
        onChange={this.handleOnChange}

        />
        <br></ br>

      <label htmlFor="playerheight">Player Height: </label>
        <input
        type="number"
        name="height"
        onChange={this.handleOnChange}
        />
        <br></ br>

      <label htmlFor="playerWeight">Player Weight: </label>
        <input
        type="number"
        name="weight"
        onChange={this.handleOnChange}
        />
        <br></ br>
      <label htmlFor="playerImage">Player Image: </label>
        <input
        type="text"
        name="logo_url"
        onChange={this.handleOnChange}
        />
        <br></ br>

      <label htmlFor="team_id">Team Number: </label>
        <input
        type="number"
        name="team_id"
        onChange={this.handleOnChange}
        />
        <br></ br>
        <input type="submit" value="Edit Player" />
      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    playerFormData: state.playerFormData
  }
}


export default connect (mapStateToProps, {updatePlayerFormData, editPlayer, fetchPlayers })(PlayerEditForm);
