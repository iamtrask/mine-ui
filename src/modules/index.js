import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import notifications from './notifications';
import models from './models';
import schema from './schema';

export default combineReducers({
  routing: routerReducer,
  auth,
  notifications,
  models,
  schema
});
