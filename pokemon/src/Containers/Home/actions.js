import {
  SET_POKEMON,
  GET_POKEMON,
  SET_MORE_POKEMON,
  GET_MORE_POKEMON,
} from "./constants";

export const setPokemon = (pokemon) => {
  return {
    type: SET_POKEMON,
    pokemon,
    next: pokemon.next,
  };
};

export const getPokemon = () => {
  return {
    type: GET_POKEMON,
  };
};

export const setMorePokemon = (pokemon) => {
  return {
    type: SET_MORE_POKEMON,
    pokemon,
    next: pokemon.next,
  };
};

export const getMorePokemon = () => {
  return {
    type: GET_MORE_POKEMON,
  };
};
