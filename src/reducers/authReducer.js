import types from 'actions/types';
import { authState } from './initialState';

const setUserLogin = (auth, { user, token }, isAuth) => {
  return {
    ...auth,
    user,
    token,
    isAuth,
  };
};

export default function authReducer(auth = authState, { type, payload }) {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return setUserLogin(auth, payload, true);
    case types.LOGIN_ERROR:
    case types.LOGIN:
    default:
      return auth;
  }
}
