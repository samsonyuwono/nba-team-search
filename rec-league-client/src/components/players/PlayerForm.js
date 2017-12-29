import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'
import { updatePlayerFormData } from '../../actions/playerForm';
import { createPlayer } from '../../actions/players';
import { getTeams } from '../../actions/teams'
// import TeamDropDown from '../teams/TeamDropDown'

class PlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };

  }


  componentDidMount(){
    this.props.getTeams()
    .then(teams => this.setState({teams: teams}))
  }

  // toggle() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  // }


  handleTeamSelect = event => {
    team: this.props.teams.find(team => team.name === event.target.value)
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlayerFormData = Object.assign({}, this.props.playerFormData, {
      [name]: value
    })
    this.props.updatePlayerFormData(currentPlayerFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const teams = {teams: this.state.team.id}
    this.props.createPlayer(this.props.playerFormData, this.props.history)
  }

  render() {
    console.log(this.props.teams)
    const { name, height, weight, image_url, team_id } = this.props.playerFormData;
    const teams = this.props.teams
    const teamOptions = teams.map(team => {
      return <option value={team.name} id={team.id} key={team.id}>{team.name}</option>
    });

    return (
      <div className='playerForm'>
        <h1>Add a player to your team</h1>
        <form onSubmit={this.handleOnSubmit}>
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
          <label>Select Team</label>
          <select value={this.state.teams} onChange={(event)=> this.handleTeamSelect(event)}>
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
