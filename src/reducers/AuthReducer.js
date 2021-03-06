import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: {}
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };

    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };

    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication Failed!', password: '' };

    default:
      return state;
  }
}
