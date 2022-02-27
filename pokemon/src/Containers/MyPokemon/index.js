import React, { useEffect, useState } from "react";
import {
  getReleaseChance,
  setRelease,
  setReleaseChance,
  getRename,
} from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

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
    dispatch(setReleaseChance(null));
  }, [chance]);

  const renamePokemon = (pokemon) => {
    dispatch(getRename(pokemon));
  };

  return (
    <ul>
      {myPokemon.map((pokemon) => (
        <li>
          <img src={pokemon.sprites.front_default} alt="Pokemon"></img>
          <h1>{pokemon.nickname}</h1>
          <h2>your pokemon id: {pokemon.myPokemonId}</h2>
          <Button
            onClick={() => doReleasePokemon(pokemon.myPokemonId)}
            variant="contained"
            color="primary"
          >
            Release
          </Button>
          <Button
            onClick={() => renamePokemon(pokemon)}
            variant="contained"
            color="primary"
          >
            Rename
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default MyPokemon;
