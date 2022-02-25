import { CATCH } from "./constants";

const detailReducer = (state = [], action) => {
  switch (action.type) {
    case CATCH:
      return state;
    default:
      return state;
  }
};

export default detailReducer;
