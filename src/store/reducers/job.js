import { LOAD_JOB_LIST, SET_JOB_DETAIL } from '../constants/job';

function jobReducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_JOB_LIST:
      return {
        ...state,
        jobList: action.payload,
      };
    case SET_JOB_DETAIL:
      return {
        ...state,
        jobDetail: action.payload,
      };
    default:
      return state;
  }
}

export default jobReducer;
