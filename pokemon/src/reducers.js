import { combineReducers } from "redux";
import detailReducer from "./Containers/PokemonDetail/reducer";
import homeReducer from "./Containers/Home/reducer";
import pokemonReducer from "./Containers/MyPokemon/reducer";

const allReducers = combineReducers({
    detail: detailReducer,
    home: homeReducer,
    pokemon: pokemonReducer
})

export default allReducers;