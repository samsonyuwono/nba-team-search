import React, {Component } from 'react';
import { connect } from 'react-redux';
import { increaseWin } from '../../actions/teams';


class TeamWinLoss extends Component {
  constructor(props) {
    super()
    this.state = {
      wins: 0,
      losses: 0
    }
  }

  handleWin = event => {
    console.log(this.props)
    this.setState({
      wins: this.state.wins + 1
    })
  }


  handleLoss = event => {
    this.setState({
      losses: this.state.losses + 1
    })
  }

  render(){
    return (
      <div>
      <button onClick={(ev)=> increaseWin()}>Wins</button>{this.state.wins}
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

const mapDispatchToProps = (dispatch) => {
  return {
    win: () => dispatch({ type: 'INCREASE_WIN'})
  }
}


export default connect(mapStateToProps)(TeamWinLoss);
