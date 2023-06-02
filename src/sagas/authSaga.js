import { call, put } from "@redux-saga/core/effects";
import types from "actions/types";
// import { authLoginResult } from "apis/video";

//LOGIN
const OKLogin = () => {
  return {
    type: types.LOGIN_SUCCESS,
  };
};

const ErrLogin = () => {
  return {
    type: types.LOGIN_ERROR,
  };
};

export function* loginSaga() {
  try {
    // yield call(authLoginResult);

    yield put(OKLogin());
  } catch (error) {
    yield put(ErrLogin());
  }
}
