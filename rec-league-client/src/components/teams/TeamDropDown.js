import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTeams } from '../../actions/teams'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TeamDropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
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
          <DropdownItem>{teamDropDown()}</DropdownItem>
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
