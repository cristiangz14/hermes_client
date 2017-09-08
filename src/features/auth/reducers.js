import AuthService from './AuthService';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from './actions';

const authService = new AuthService();

const initialState = {
  isAuthenticated: authService.isAuthenticated(),
  token: authService.getIdToken(),
  profile: authService.getProfile()
}

export default function reducers(state = initialState , action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        profile: action.profile
      };
      break;
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        profile: null
      };
      break;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        profile: null
      }
    default:
      return state;
  }
}