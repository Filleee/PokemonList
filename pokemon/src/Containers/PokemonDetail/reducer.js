import produce from "immer";
import { SET_DETAIL, SET_CATCH_CHANCE } from "./constants";

export const initialState = {
  detail: [],
  catchChance: null,
};
const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DETAIL:
        draft.detail = action.detail.data;
        break;
      case SET_CATCH_CHANCE:
        draft.catchChance = action.chance;
        break;
      default:
        return state;
    }
  });

export default detailReducer;
