import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import TeamsCard from '../../components/teams/TeamsCard';
import TeamForm from '../../components/teams/TeamForm';
import TeamShow from '../../components/teams/TeamShow';


class TeamsPage extends Component {
  render() {
    const { match, teams } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={(props) => <TeamsCard {...props} teams={teams} />}  />
          <Route exact path={`${match.url}/new`} component={TeamForm} />
          <Route exact path={`${match.url}/:teamId`} component={TeamShow} />
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

export default connect(mapStateToProps)(TeamsPage);
