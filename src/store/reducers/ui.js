import { IS_LOADING, SET_ERROR } from '../constants/ui';

function uiReducer(state = {}, action = {}) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default uiReducer;
