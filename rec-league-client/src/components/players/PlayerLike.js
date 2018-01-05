import React, {Component} from 'react';

class PlayerLike extends Component {
  constructor(props) {
    super()
    this.state = {
      count: 0
    }
  }

  handleOnLike = event => {
    this.setState({
      count: this.state.count + 1
    })
  }

  callApi = () => {
    fetch(`http://localhost:3001/api/players`)
    .then(res => res.json())
    .then(players => console.log(players))
  }

  render(){
    return (
      <div>
      <button onClick={this.handleOnLike}>Like</button>{this.state.count}
      <button onClick={this.callApi}>Call Api</button>{this.state.players}
      </div>
    )
  }
}

export default PlayerLike;
