import {
  RENAME,
  RELEASE,
  GET_RELEASE_CHANCE,
  SET_RELEASE_CHANCE,
  CATCH,
} from "./constants";

export const setCatch = (pokemon) => {
  return {
    type: CATCH,
    pokemon,
  };
};

export const setRename = (pokemonId, nickname) => {
  return {
    type: RENAME,
    pokemonId,
    nickname,
  };
};

export const getReleaseChance = () => {
  return {
    type: GET_RELEASE_CHANCE,
  };
};

export const setReleaseChance = (chance) => {
  return {
    type: SET_RELEASE_CHANCE,
    chance,
  };
};

export const setRelease = (pokemonId) => {
  return {
    type: RELEASE,
    pokemonId,
  };
};
