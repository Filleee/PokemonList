import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const PokeCard = ({ pokemon }) => {
  const [pokemons, setPokemons] = useState({
    pokemon: [],
    owned: 0,
  });

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    let owned;
    const response = await fetch(`${pokemon.url}`);
    const data = await response.json();
    setPokemons({
      pokemon: data,
      owned: owned,
    });
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        {pokemons.pokemon.sprites ? (
          <CardMedia
            className={classes.media}
            image={pokemons.pokemon.sprites.front_default}
            title="Card Image cap"
          />
        ) : null}
      </CardContent>
      <CardActions>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
  );
};
export default PokeCard;
