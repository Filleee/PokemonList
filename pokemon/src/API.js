import axios from "axios";

export const getPokemonRequest = () => {
  return axios.request({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
  });
};

export const getMorePokemonRequest = (nextURL) => {
  return axios.request({
    method: "GET",
    url: nextURL,
  });
};

export const getPokemonDetail = (pokemon) => {
  return axios.request({
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
  });
};

export const getReleaseChance = () => {
  return axios.request({
    method: "GET",
    url: `http://localhost:8000/release`,
  });
};

export const getCatchChance = () => {
  return axios.request({
    method: "GET",
    url: `http://localhost:8000/catch`,
  });
};
