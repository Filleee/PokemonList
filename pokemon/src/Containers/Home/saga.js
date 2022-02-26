import { GET_POKEMON, GET_MORE_POKEMON } from "./constants";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { setPokemon, setMorePokemon } from "./actions";
import { getPokemonRequest, getMorePokemonRequest } from "../../API";
import { getNext } from "./selectors";

export function* doGetPokemon() {
  try {
    const response = yield call(getPokemonRequest);
    yield put(setPokemon(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* doLoadMorePokemon() {
  const next = yield select(getNext);
  try {
    const response = yield call(getMorePokemonRequest, next);
    yield put(setMorePokemon(response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_POKEMON, doGetPokemon);
  yield takeLatest(GET_MORE_POKEMON, doLoadMorePokemon);
}
