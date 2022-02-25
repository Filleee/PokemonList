import produce from "immer";
import { SET_POKEMON, SET_MORE_POKEMON } from "./constants";
//action.pokemon.data.results

export const initialState = {
  pokemon: [],
  next: "",
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_POKEMON:
        draft.pokemon = action.pokemon.results;
        console.log(action.next, "next");
        draft.next = action.next;
        break;
      case SET_MORE_POKEMON:
        draft.pokemon = draft.pokemon.concat(action.pokemon.results);
        draft.next = action.next;
        break;
      default:
        break;
    }
  });

export default homeReducer;
