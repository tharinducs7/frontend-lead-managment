import { all, fork } from "redux-saga/effects";
import leadsSaga from "./leads/saga";

export function* rootSaga() {
  yield all([fork(leadsSaga)]);
}
