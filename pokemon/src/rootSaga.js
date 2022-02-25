import { all } from "redux-saga/effects";

import homeSaga from "./Containers/Home/saga";

export default function* rootSaga() {
  yield all([homeSaga()]);
}
