import { all } from "redux-saga/effects";

import homeSaga from "./Containers/Home/saga";
import detailSaga from "./Containers/PokemonDetail/saga";
import myPokemonSaga from "./Containers/MyPokemon/saga";

export default function* rootSaga() {
  yield all([homeSaga(), detailSaga(), myPokemonSaga()]);
}
