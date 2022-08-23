import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import mainReducer from './reducers';

const middlewares = [thunk];

const initialState = {
  job: {
    jobList: [],
    jobDetail: {},
  },
  auth: {
    isAuthenticated: false,
    user: null,
  },
  ui: {
    isLoading: false,
    openModal: false,
    error: null,
  },
};

const store = createStore(
  mainReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

export default store;
