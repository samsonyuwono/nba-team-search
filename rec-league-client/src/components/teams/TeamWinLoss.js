import React, {Component } from 'react';
import { connect } from 'react-redux';
import { increaseWin, increaseLoss } from '../../actions/teams';
import { bindActionCreators } from 'redux';

class TeamWinLoss extends Component {

  constructor(props) {
    super(props)
    this.state = {
      teamId: this.props.teamId,
      wins: this.props.wins,
      losses: this.props.losses
    }
  }

  handleWin =  event => {
    const wins = this.props.wins
    const teamId = this.props.team
    this.props.increaseWin(wins, teamId)
  }


  handleLoss = event => {
    const losses = this.props.losses
    const teamId = this.props.team
    this.props.increaseWin(losses, teamId)
  }

  render(){
    const wins = this.state.wins
    const losses = this.state.losses
    return (
      <div>
      <button onClick={(event)=> this.handleWin(this.props.wins)}>Wins</button>{wins}
      <button onClick={(event) => this.handleLoss(this.props.losses)}>Losses</button>{losses}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      teams: state.teams,
    }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increaseWin: increaseWin,
      increaseLoss: increaseLoss
    }, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamWinLoss);
