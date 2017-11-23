import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateTeamFormData } from '../actions/teamForm';
import { createTeam } from '../actions/teams';

class TeamForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentTeamFormData = Object.assign({}, this.props.teamFormData, {
      [name]: value
    })
    this.props.updateTeamFormData(currentTeamFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createTeam(this.props.teamFormData)
  }

  render() {
    const { name, championships, year_established, logo_url } = this.props.teamFormData;

    return (
      <div>
        Add A Team To The Inventory
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
            <label htmlFor="championships">Championships:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="championships"
              value={championships}
            />
          </div>
          <div>
            <label htmlFor="year_established">Year Established:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="year_established"
              value={year_established}
            />
          </div>
          <div>
            <label htmlFor="logo_url">Logo url:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="logo_url"
              value={logo_url}
            />
          </div>

          <button type="submit">Add Team</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    teamFormData: state.teamFormData
  }
}

export default connect(mapStateToProps, {
  updateTeamFormData,
  createTeam
})(TeamForm);
