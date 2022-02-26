import {
  GET_DETAIL,
  SET_DETAIL,
  GET_CATCH_CHANCE,
  SET_CATCH_CHANCE,
} from "./constants";

export const getDetail = (name) => {
  return {
    type: GET_DETAIL,
    name,
  };
};

export const setDetail = (detail) => {
  return {
    type: SET_DETAIL,
    detail,
  };
};

export const getCatchChance = () => {
  return {
    type: GET_CATCH_CHANCE,
  };
};

export const setCatchChance = (chance) => {
  return {
    type: SET_CATCH_CHANCE,
    chance,
  };
};
