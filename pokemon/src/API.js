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
  return axios
    .request({
      method: "GET",
      url: `http://localhost:8000/catch`,
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
      console.log(error.toJSON());
    });
};

export const getNewNickname = (
  nickname,
  prevLastRename,
  lastRename,
  renameCounter
) => {
  return axios.request({
    method: "POST",
    url: "http://localhost:8000/rename",
    data: {
      pokename: nickname,
      beforeLastRename: prevLastRename,
      lastRename,
      renameCounter,
    },
  });
};
