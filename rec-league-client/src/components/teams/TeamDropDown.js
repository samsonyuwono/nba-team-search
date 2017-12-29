import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTeams } from '../../actions/teams'
import Dropdown from 'react-dropdown'
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TeamDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.props.getTeams()
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    console.log(this.props.teams)
    const teamDropDown = () => {
      const teams = this.props.teams
      return teams.map(team =>{
        return(
          <div key={team.id}>
              {team.name}
          </div>
        )
      })
    }
    return (
      <Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
        <DropdownToggle caret>
          Select your team here
        </DropdownToggle>
        <DropdownMenu right>
          <Dropdown onChange={this._onSelect}  placeholder="Select an option" />
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps, { getTeams })(TeamDropDown)
