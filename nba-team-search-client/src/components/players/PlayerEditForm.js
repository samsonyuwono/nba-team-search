import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayerFormData } from '../../actions/playerForm';
import { fetchPlayers } from '../../actions/players';
import { editPlayer } from '../../actions/players'

class PlayerEditForm extends Component {

  componentWillMount(){
    this.props.fetchPlayers()
  }

  componentDidMount(){
    const allPlayers = this.props.players
    const currentPlayer = this.props.match.params.id
    const playerFormData = allPlayers.filter(allPlayer => allPlayer.id == currentPlayer)
    this.props.updatePlayerFormData(playerFormData)

  }
  //const playerId = this.props.match.params.id pass this as arg to action creator and use it to retrieve playerFormData
  //editPlayer

handleOnChange = event => {
  // debugger;
    const { name, value } = event.target
    const currentPlayerFormData = Object.assign({},this.props.playerFormData, {
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
    const {name, height, weight, image_url, team_id} = this.props.playerFormData
    console.log(this.props.players)
    //current player id find in players array
    console.log(this.props.playerFormData)
    console.log(this.props.playerFormData.id)
      //make a function that renders the form

// if !this.props.playerFormData return "doesn't exist" //no map needed just return the fields
// else render currentPlayerFormData

            return(

              <div className="editPlayerForm">
              <h1>Edit the player</h1>
              <form onSubmit = {event => this.handleOnSubmit(event) }>
              <label htmlFor="playerName">Player Name: </label>
                <input
                type="texty"
                name="name"
                onChange={this.handleOnChange}
                value={name}
                />
                <br></ br>
                <label htmlFor="playerHeight">Player Height: </label>
                  <input
                  type="number"
                  name="height"
                  onChange={this.handleOnChange}
                  value={height}
                  />
                  <br></ br>
                <label htmlFor="playerWeight">Player Weight: </label>
                  <input
                  type="number"
                  name="weight"
                  onChange={this.handleOnChange}
                  value={weight}
                  />
                  <br></ br>
                  <label htmlFor="playerImage">Player Image: </label>
                    <input
                    type="text"
                    name="image_url"
                    onChange={this.handleOnChange}
                    value={image_url}
                    />
                    <br></ br>
                    <div>
                      <label htmlFor="team_id">Team Number:</label>
                      <input
                        type="number"
                        onChange={this.handleOnChange}
                        name="team_id"
                        value={team_id}
                      />
                    </div>
                <input type="submit" value="Edit Player" />
                </form>
              </div>
          )
        }
      }

const mapStateToProps = (state) => {
  // if(this.props.match.params.id){
  //   return {
  //     player: this.props.players.find(player => player.id === this.props.match.params.id)
  //   }
  // }
  return  {
    players: state.players,
    playerFormData: state.playerFormData
  }
}

export default connect (mapStateToProps, {updatePlayerFormData, editPlayer, fetchPlayers })(PlayerEditForm);
