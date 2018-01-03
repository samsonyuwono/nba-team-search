import React, {Component } from 'react';
import { connect } from 'react-redux';
import { getTeams, increaseWin } from '../../actions/teams';

class TeamWinLoss extends Component {


  constructor(props) {
    super(props)
    this.state = {
      teamId: this.props.teamId,
      wins: 0,
      losses: 0
    }
  }
  componentDidMount(){
    this.props.getTeams()
  }

  handleWin = (event) => {
    const { name, value } = event.target
    console.log(event.target)
    console.log(this.props.teams.wins)
    // this.props.increaseWin(teamId)
  }


  handleLoss = event => {
    this.setState({
      losses: this.state.losses + 1
    })
  }

  render(){
    const { team } = this.props.teams
    const teams = this.props.teams
    const teamWins = this.state.teamId //id of team
    // const teamWins = teams.map(team => {
    //   return <option value={team.name} id={team.id} key={team.id}>{team.wins}</option>
    // });
    return (
      <div>
      <button onClick={(event)=> this.handleWin(event)}>Wins</button>{teamWins}
      <button onClick={(event) => this.handleLoss(event)}>Losses</button>{this.state.losses}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      teams: state.teams
    }
}



export default connect(mapStateToProps, {getTeams, increaseWin})(TeamWinLoss);
