import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import notification from './notification';
import models from './models';

export default combineReducers({
  routing: routerReducer,
  auth,
  notification,
  models
});
