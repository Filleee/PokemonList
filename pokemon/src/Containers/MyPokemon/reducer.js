import { SET_RENAME, SET_RELEASE_CHANCE, CATCH, RELEASE } from "./constants";
import produce from "immer";

export const initialState = {
  myPokemon: [],
  releaseChance: 0,
};

let lastId = 0;

const pokemonReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_RENAME:
        console.log(action.pokemonId);
        console.log(draft.myPokemon);
        const index = draft.myPokemon.findIndex(
          (todo) => todo.myPokemonId === action.pokemonId
        );
        if (index !== -1) {
          if (draft.myPokemon[index].renameCounter === 0) {
            draft.myPokemon[index].prevLastRename = 1;
            draft.myPokemon[index].lastRename = 0;
            draft.myPokemon[index].nickname = action.nickname;
            draft.myPokemon[index].renameCounter++;
          } else if (draft.myPokemon[index].renameCounter === 1) {
            draft.myPokemon[index].prevLastRename = 0;
            draft.myPokemon[index].lastRename = 1;
            draft.myPokemon[index].nickname = action.nickname;
            draft.myPokemon[index].renameCounter++;
          } else {
            const temp =
              draft.myPokemon[index].prevLastRename +
              draft.myPokemon[index].lastRename;
            draft.myPokemon[index].prevLastRename =
              draft.myPokemon[index].lastRename;
            draft.myPokemon[index].lastRename = temp;
            draft.myPokemon[index].nickname = action.nickname;
            draft.myPokemon[index].renameCounter++;
          }
        }

        break;
      case SET_RELEASE_CHANCE:
        draft.releaseChance = action.chance;
        break;
      case CATCH:
        draft.myPokemon.push({
          ...action.pokemon,
          nickname: action.nickname,
          myPokemonId: lastId++,
          prevLastRename: 0,
          lastRename: 0,
          renameCounter: 0,
        });
        // console.log(action.nickname);
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
