import { combineReducers } from 'redux';

import authReducer from './auth';
import jobReducer from './job';
import uiReducer from './ui';

const mainReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
  ui: uiReducer,
});

export default mainReducer;
