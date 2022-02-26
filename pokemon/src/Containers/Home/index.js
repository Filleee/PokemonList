import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokeCard from "./Components/PokeCard";
import { Button, Grid } from "@material-ui/core";
import { getPokemon, getMorePokemon } from "./actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  const homePokemon = useSelector((state) => state.home.pokemon);

  const loadMore = () => {
    dispatch(getMorePokemon());
  };

  return (
    <div className="container">
      <h1>TEST</h1>
      <Grid container spacing={1}>
        {homePokemon.map((pokemon) => (
          <Grid key={pokemon.name} item xs={3}>
            <PokeCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
      <Button onClick={loadMore} variant="contained" color="primary">
        Load More
      </Button>
    </div>
  );
};

export default Home;
