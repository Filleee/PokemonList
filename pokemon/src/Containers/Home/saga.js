import { GET_POKEMON, GET_MORE_POKEMON } from "./constants";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { setPokemon, setMorePokemon } from "./actions";
import { getPokemonRequest, getMorePokemonRequest } from "../../API";
import { getNext } from "./selectors";

export function* doGetPokemon() {
  console.log("masuk");
  try {
    const response = yield call(getPokemonRequest);
    yield put(setPokemon(response.data));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function* doLoadMorePokemon() {
  console.log("masuk load more");
  const next = yield select(getNext);
  console.log(next, "next load more");
  try {
    const response = yield call(getMorePokemonRequest, next);
    console.log(response, "first response");
    yield put(setMorePokemon(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_POKEMON, doGetPokemon);
  yield takeLatest(GET_MORE_POKEMON, doLoadMorePokemon);
}
