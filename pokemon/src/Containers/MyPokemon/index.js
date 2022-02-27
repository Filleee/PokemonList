import React, { useEffect, useState } from "react";
import {
  getReleaseChance,
  setRelease,
  setReleaseChance,
  getRename,
} from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const MyPokemon = () => {
  const myPokemon = useSelector((state) => state.pokemon.myPokemon);
  const chance = useSelector((state) => state.pokemon.releaseChance);
  const [releasePokemon, setReleasePokemon] = useState(0);
  const dispatch = useDispatch();

  const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const doReleasePokemon = (id) => {
    dispatch(getReleaseChance());
    setReleasePokemon(id);
  };

  useEffect(() => {
    if (chance > 0) {
      if (isPrime(chance)) {
        dispatch(setRelease(releasePokemon));
      } else {
        alert(`Release Failed... (Number : ${chance})`);
      }
    }
    if (chance !== null) dispatch(setReleaseChance(null));
  }, [chance]);

  const renamePokemon = (pokemon) => {
    dispatch(getRename(pokemon));
  };
  const classes = useStyles();

  return (
    <div style={{ marginTop: 20 }}>
      <Grid container spacing={1}>
        {myPokemon.map((pokemon) => (
          <Grid key={pokemon.name} item xs={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={pokemon.sprites.front_default}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Nickname: {pokemon.nickname}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Pokemon ID : {pokemon.myPokemonId}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => doReleasePokemon(pokemon.myPokemonId)}
                  size="small"
                  color="primary"
                >
                  Release
                </Button>
                <Button
                  onClick={() => renamePokemon(pokemon)}
                  size="small"
                  color="primary"
                >
                  Rename
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyPokemon;
