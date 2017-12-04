import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import TeamsList from '../../components/teams/TeamsList';
import TeamForm from '../../components/teams/TeamForm';
import TeamShow from '../../components/teams/TeamShow';


class TeamsPage extends Component {
  render() {
    const { match, teams } = this.props;
    console.log(match, teams)
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={(props) => <TeamsList {...props} teams={teams} />}  />
          <Route exact path={`${match.url}/new`} component={TeamForm} />
          <Route exact path={`${match.url}/:id`} component={TeamShow} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps)(TeamsPage)
