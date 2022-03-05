import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import { useStyles } from "./style";

const PokeCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState({
    pokemon: [],
  });

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await fetch(`${pokemon.url}`);
    const data = await response.json();
    setPokemons({
      pokemon: data,
    });
  };

  const goToDetail = () => {
    navigate(`/detail/${pokemons.pokemon.name}`);
  };

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
      <Typography gutterBottom variant="h4" component="h2">
        {pokemons.pokemon.name}
      </Typography>
      <Box bgcolor={"white"}>
        <Typography gutterBottom variant="h6" component="h6">
          Abilities :
        </Typography>
        {pokemons.pokemon.abilities &&
          pokemons.pokemon.abilities.map((ability) => (
            <Typography
              key={ability.ability.name}
              gutterBottom
              variant="h6"
              component="h6"
            >
              {ability.ability.name}
            </Typography>
          ))}
      </Box>

      <Grid container justifyContent="center">
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={goToDetail}
            size="small"
          >
            Detail
          </Button>
        </CardActions>
      </Grid>
    </Card>
  );
};
export default PokeCard;
