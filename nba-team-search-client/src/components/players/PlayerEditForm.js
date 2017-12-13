import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PlayerForm from './PlayerForm'
import { fetchPlayer } from '../../actions/players'
import { editPlayer } from '../../actions/players'


class PlayerEditForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target
    const currentTeamFormData = Object.assign({}, this.props.teamFormData, {
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updatePlayer(this.state.currentTeamFormData)
  }

  componentDidMount() {
    this.props.fetchPlayer()
  }
  render() {
    const { name, height, weight, image_url } = this.props
    console.log(this.props)
    // const playerWeight = this.props.players.map(player => player.name)
    // const playerHeight = this.props.players.map(player => player.height)
    // const playerWeight = this.props.players.map(player => player.weight)
    // const playerImage = this.props.players.map(player => player.image_url)

    // console.log(this.props.match.params.id)
    // console.log(this.props.players)
    // const editingPlayerName = () => {
    //   const allPlayers = this.props.players
    //   const currentPlayer = this.props.match.params.id
    //     const playerEdit = allPlayers.filter(allPlayer => allPlayer.id == currentPlayer)
    //       return playerEdit.map(player=>{
    //         return(
    //         <div key={player.id}>
    //           {player.name}
    //           {player.weight}
    //           {player.height}
    //         </div>
    //       )
    //     })
    //   }
    return (
      <form>
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
                />
                </div>

                <div>
                  <label htmlFor="playerHeight">Player Height: </label>
                  <input
                  type="number"
                  name="height"
                  onChange={this.handleOnChange}
                  />
                  </div>

                  <div>
                    <label htmlFor="playerWeight">Player Weight: </label>
                    <input
                    type="number"
                    name="weight"
                    onChange={this.handleOnChange}

                    />
                    </div>
                    <div className="eight wide field">
                      <label htmlFor="playerImage">Player Pic:</label>
                      <input
                      type="text"
                      name="image_url"
                      onChange={this.handleOnChange}

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
    players: state.players
  }
}

export default connect (mapStateToProps, {fetchPlayer, editPlayer})(PlayerEditForm);
