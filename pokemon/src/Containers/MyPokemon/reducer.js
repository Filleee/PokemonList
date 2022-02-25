import { RENAME, RELEASE } from "./constants";

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case RENAME:
      return state;
    case RELEASE:
      return state;
    default:
      return state;
  }
};

export default pokemonReducer;
