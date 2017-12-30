import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlayerFormData } from '../../actions/playerForm';
import { createPlayer } from '../../actions/players';
import { getTeams } from '../../actions/teams'

class PlayerForm extends Component {

  componentDidMount(){
    this.props.getTeams()
  }

  handleTeamSelect = (event) => {
    const { team, value } = event.target
    const currentPlayerFormData = Object.assign({}, this.props.playerFormData, {
      team: value
    })
    this.props.updatePlayerFormData(currentPlayerFormData)
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlayerFormData = Object.assign({}, this.props.playerFormData, {
      [name]: value,
    })
    this.props.updatePlayerFormData(currentPlayerFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createPlayer(this.props.playerFormData, this.props.history)
  }

  render() {
    const { name, height, weight, image_url, team } = this.props.playerFormData;
    const teams = this.props.teams
    const teamOptions = teams.map(team => {
      return <option value={team.name} id={team.id} key={team.id}>{team.name}</option>
    });

    return (
      <div className='playerForm'>
        <h1>Add a player to your team</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="height">Height(cm):</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="height"
              value={height}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight(lb):</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="weight"
              value={weight}
            />
          </div>
          <div>
            <label htmlFor="image_url">Image url:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="image_url"
              value={image_url}
            />
          </div>

          <div>
          <label htmlFor="team_select">Select Team</label>
          <select
            value={this.props.teams.id}
            onChange={this.handleTeamSelect}>
            name="team_select"
            {teamOptions}
          </select>
          </div>

          <button type="submit">Add Player</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerFormData: state.playerFormData,
    teams: state.teams
  }
}

export default connect(mapStateToProps, {updatePlayerFormData,createPlayer, getTeams
})(PlayerForm);
