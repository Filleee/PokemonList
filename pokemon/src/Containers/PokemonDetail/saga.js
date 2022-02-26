import { GET_DETAIL, GET_CATCH_CHANCE } from "./constants";
import { call, put, takeLatest } from "redux-saga/effects";
import { setDetail, setCatchChance } from "./actions";
import { getPokemonDetail, getCatchChance } from "../../API";

export function* doGetDetail(name) {
  console.log(name);
  try {
    const response = yield call(getPokemonDetail, name.name);
    console.log(response);
    yield put(setDetail(response));
  } catch (error) {
    console.log(error);
  }
}

export function* doGetCatchChance() {
  try {
    const response = yield call(getCatchChance);
    yield put(setCatchChance(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* detailSaga() {
  yield takeLatest(GET_DETAIL, doGetDetail);
  yield takeLatest(GET_CATCH_CHANCE, doGetCatchChance);
}
