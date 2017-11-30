import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import PlayersList from '../../components/players/PlayersList';

class PlayersPage extends Component {
  render() {
    const { match, players, teams } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={(props) => <PlayersList {...props} players={players} />}  />
        </Switch>
    </div>
    )
  }
}


export default PlayersPage;
