import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm'

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as updatePlayer from '../../actions/players';



class PlayerEditForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isEditing: false,
      player: this.props.player,

    }
    this.updatePlayerState = this.updatePlayerState.bind(this);
    this.savePlayer = this.savePlayer.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  updatePlayerState(event) {
    const field = event.target.name
    const player = this.state.player
    player[field] = event.target.value;
    return this.setState({player: player})
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.player.id !== nextProps.player.id){
      this.setState({ player: nextProps.player });
    }
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  savePlayer(event) {
    event.preventDefault();
    this.props.actions.updatePlayer(this.state.player)
  }

  render() {
    return (
      <div className= "editForm">
      <h1> This is the edit player page! </h1>
      <PlayerForm
        player={this.state.player}
        onSave= {this.savePlayer}
        onChange={this.updatePlayerState}
      />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    player: state.player,
    playerEditFormData: state.playerEditFormData
  }
}

PlayerEditForm.propTypes = {
  player: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updatePlayer, dispatch)
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(PlayerEditForm);
