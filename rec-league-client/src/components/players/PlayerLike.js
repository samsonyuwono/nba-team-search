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

  render(){
    return (
      <div>
      <button onClick={this.handleOnLike}>Like</button>{this.state.count}
      </div>
    )
  }
}

export default PlayerLike;
