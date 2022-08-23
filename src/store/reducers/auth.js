import { AUTH_USER } from '../constants/auth';

function authReducer(state = {}, action = {}) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        auth: {
          isAuthenticated: true,
          user: action.payload,
        },
      };
    default:
      return state;
  }
}

export default authReducer;
