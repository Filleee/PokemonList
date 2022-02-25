import { GET_POKEMON } from "./constants";

const homeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON:
      return state;
    default:
      return state;
  }
};

export default homeReducer;
