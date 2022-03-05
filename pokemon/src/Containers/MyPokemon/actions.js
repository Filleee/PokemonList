import {
  SET_RENAME,
  GET_RENAME,
  RELEASE,
  GET_RELEASE_CHANCE,
  SET_RELEASE_CHANCE,
  CATCH,
  ERROR_MY_POKEMON,
} from "./constants";

export const setCatch = (pokemon, nickname) => {
  return {
    type: CATCH,
    pokemon,
    nickname,
  };
};

export const getRename = (pokemon) => {
  return {
    type: GET_RENAME,
    pokemon,
  };
};

export const setRename = (pokemonId, nickname) => {
  return {
    type: SET_RENAME,
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

export const setError = (error) => {
  return {
    type: ERROR_MY_POKEMON,
    error,
  };
};
