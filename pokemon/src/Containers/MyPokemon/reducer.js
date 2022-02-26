import { RENAME, SET_RELEASE_CHANCE, CATCH, RELEASE } from "./constants";
import produce from "immer";

export const initialState = {
  myPokemon: [],
  releaseChance: 0,
};

let lastId = 0;

const pokemonReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RENAME:
        const index = draft.findIndex(
          (todo) => todo.myPokemonId === action.pokemonId
        );
        if (index !== -1) {
          const temp = draft[index].prevLastRename + draft[index].lastRename;
          draft[index].myPokemonprevLastRename = draft[index].lastRename;
          draft[index].lastRename = temp;
          draft[index].name = action.nickname;
        }
        break;
      case SET_RELEASE_CHANCE:
        draft.releaseChance = action.chance;
        break;
      case CATCH:
        draft.myPokemon.push({
          ...action.pokemon,
          myPokemonId: lastId++,
          prevLastRename: 0,
          lastRename: 1,
          renameCounter: 0,
        });
        break;
      case RELEASE:
        const index2 = draft.myPokemon.findIndex(
          (todo) => todo.myPokemonId === action.pokemonId
        );
        if (index2 !== -1) draft.myPokemon.splice(index2, 1);
        lastId--;
        break;
      default:
        return state;
    }
  });

export default pokemonReducer;
