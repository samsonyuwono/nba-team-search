import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerCard from '../../components/players/PlayerCard';
import PlayerForm from '../../components/players/PlayerForm';
import { fetchPlayers } from '../../actions/players'
import '../../assets/Players.css'

class PlayersList extends Component {

  componentDidMount() {
    this.props.fetchPlayers()
  }
  render() {
    return (
    <div className= "PlayersContainer">
      <h1>Players</h1>
      {this.props.players.map(player => <PlayerCard key={player.id} player=
        {player} />)}
        <PlayerForm />
   </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    players: state.players
  })
}

export default connect(mapStateToProps, { fetchPlayers })(PlayersList);
