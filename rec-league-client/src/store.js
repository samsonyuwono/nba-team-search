import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import teams from './reducers/teams';
import players from './reducers/players';
import teamFormData from './reducers/teamFormData';
import playerFormData from './reducers/playerFormData'
import teamWinLoss from './reducers/teamWinLoss';

const reducers = combineReducers({
  teams,
  teamFormData,
  teamWinLoss,
  players,
  playerFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
