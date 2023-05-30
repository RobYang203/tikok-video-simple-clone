import types from "actions/types";
import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./authSaga";

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}