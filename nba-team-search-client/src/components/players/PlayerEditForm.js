import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayerFormData } from '../../actions/playerForm';
import { fetchPlayers } from '../../actions/players';
import { editPlayer } from '../../actions/players'

class PlayerEditForm extends Component {
  componentWillMount(){
    this.props.fetchPlayers()
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlayerFormData = Object.assign({}, this.props.playerFormData, {
      [name]: value
      })
      this.props.updatePlayerFormData(currentPlayerFormData)
    }

  handleOnSubmit = event => {
    event.preventDefault();
    const playerId = this.props.match.params
    this.props.editPlayer(this.state, playerId)
  }

  render() {
    const playerEdit = (name, height, weight, image_url) => {
      const allPlayers = this.props.players
      const currentPlayer = this.props.match.params.id
        const playerEdit = allPlayers.filter(allPlayer => allPlayer.id == currentPlayer)

          return playerEdit.map(player=>{
            return(
              <div key={player.id}>
              <form onSubmit={this.handleOnSubmit}>
              <label htmlFor="playerName">Player Name: </label>
                <input
                type="text"
                name="name"
                onChange={this.handleOnChange}
                value={player.name}
                />
                <br></ br>
                <label htmlFor="playerHeight">Player Height: </label>
                  <input
                  type="number"
                  name="height"
                  onChange={this.handleOnChange}
                  value={player.height}
                  />
                  <br></ br>
                <label htmlFor="playerWeight">Player Weight: </label>
                  <input
                  type="number"
                  name="weight"
                  onChange={this.handleOnChange}
                  value={player.weight}
                  />
                  <br></ br>
                  <label htmlFor="playerImage">Player Image: </label>
                    <input
                    type="text"
                    name="image_url"
                    onChange={this.handleOnChange}
                    value={player.image_url}
                    />
                    <br></ br>
                <input type="submit" value="Edit Player" />
                </form>
              </div>
          )
        })
      }
    return (
      <div>
      <h1>This is the player edit page</h1>
      {playerEdit()}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    players: state.players
  }
}

export default connect (mapStateToProps, {updatePlayerFormData, editPlayer, fetchPlayers })(PlayerEditForm);
