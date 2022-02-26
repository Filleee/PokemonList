import { call, put, takeLatest } from "redux-saga/effects";
import { GET_RELEASE_CHANCE } from "./constants";
import { getReleaseChance } from "../../API";
import { setReleaseChance } from "./actions";

export function* doGetReleaseChance() {
  try {
    const response = yield call(getReleaseChance);
    yield put(setReleaseChance(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* myPokemonSaga() {
  yield takeLatest(GET_RELEASE_CHANCE, doGetReleaseChance);
}
