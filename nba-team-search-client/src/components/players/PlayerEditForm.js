import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayerFormData } from '../../actions/playerForm';
import { fetchPlayer } from '../../actions/players';
// import { fetchPlayers } from '../../actions/players'
import { editPlayer } from '../../actions/players'

class PlayerEditForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
      this.setState({
        [name]: value
      })
    }

  handleOnSubmit = event => {
    event.preventDefault();
    const playerId = this.props.match.params
    this.props.fetchPlayer(this.props.player)
  }

  render() {
    const { name, height, weight, image_url } = this.props
    const playerId = parseInt(this.props.match.params.id)
    console.log(playerId)
    console.log(this.props)
    // const playerName = this.props.players.map(player => player.name)
    // const playerHeight = this.props.players.map(player => player.height)
    // const playerWeight = this.props.players.map(player => player.weight)
    // const playerImage = this.props.players.map(player => player.image_url)

    // console.log(this.props.match.params.id)
    // console.log(this.props.players)
    // const editForm = () => {
    //   const allPlayers = this.props.players
    //   const currentPlayer = this.props.match.params.id
    //     const playerEdit = allPlayers.filter(allPlayer => allPlayer.id === currentPlayer)
    //       return playerEdit.map(player=>{
    //         return(
    //
    //         <div key={player.id}>
    //           {player.name}
    //           {player.weight}
    //           {player.height}
    //         </div>
    //       )
    //     })
    //   }
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className= "editForm">
        <h1> This is the edit player page! </h1>
          <div className="ui one column stackable center aligned grid container">
            <div className="fields">

              <div>
                <label htmlFor="playerName">Player Name: </label>
                <input
                type="text"
                name="name"
                onChange={this.handleOnChange}
                value={this.props.name}
                />
                </div>

                <div>
                  <label htmlFor="playerHeight">Player Height: </label>
                  <input
                  type="number"
                  name="height"
                  onChange={this.handleOnChange}
                  value={this.props.height}
                  />
                  </div>

                  <div>
                    <label htmlFor="playerWeight">Player Weight: </label>
                    <input
                    type="number"
                    name="weight"
                    onChange={this.handleOnChange}
                    value={this.props.weight}
                    />
                    </div>

                    <div>
                      <label htmlFor="playerImage">Player Image: </label>
                      <input
                      type="text"
                      name="image_url"
                      onChange={this.handleOnChange}
                      value={this.props.image_url}
                      />
                      </div>
                <br />

                <input type="submit" value="Edit Player" />

            </div>
          </div>
        </div>
      </form>

    )
  }
}

const mapStateToProps = (state) => {
  return  {
    playerFormData: state.playerFormData
  }
}

export default connect (mapStateToProps, {updatePlayerFormData, editPlayer, fetchPlayer })(PlayerEditForm);
