import { call, put, takeLatest } from "redux-saga/effects";
import { GET_RELEASE_CHANCE, GET_RENAME } from "./constants";
import { getReleaseChance, getNewNickname } from "../../API";
import { setReleaseChance, setRename } from "./actions";

export function* doGetReleaseChance() {
  try {
    const response = yield call(getReleaseChance);
    yield put(setReleaseChance(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* doGetNewNickname(pokemon) {
  try {
    console.log(pokemon, "saga");
    const response = yield call(
      getNewNickname,
      pokemon.pokemon.nickname,
      pokemon.pokemon.prevLastRename,
      pokemon.pokemon.lastRename,
      pokemon.pokemon.renameCounter
    );
    console.log(pokemon.pokemon.myPokemonId);
    yield put(setRename(pokemon.pokemon.myPokemonId, response.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* myPokemonSaga() {
  yield takeLatest(GET_RELEASE_CHANCE, doGetReleaseChance);
  yield takeLatest(GET_RENAME, doGetNewNickname);
}
