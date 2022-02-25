import React, { useEffect, useState } from "react";
import PokeCard from "./Components/PokeCard";
import { Button, Card, Grid } from "@material-ui/core";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
    );
    const data = await response.json();
    setPokemons(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  };

  const nextPage = async () => {
    const response = await fetch(next);
    const data = await response.json();
    setPokemons(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  };

  const prevPage = async () => {
    const response = await fetch(previous);
    const data = await response.json();
    setPokemons(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  };

  return (
    <div className="container">
      <Grid container spacing={1}>
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid>
      <Button
        onClick={prevPage}
        style={{ margin: 10 }}
        variant="contained"
        color="primary"
      >
        Prev
      </Button>
      <Button onClick={nextPage} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
};

export default Home;
