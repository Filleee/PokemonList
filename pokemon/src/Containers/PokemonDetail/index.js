import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, getCatchChance, setCatchChance } from "./actions";
import { setCatch } from "../MyPokemon/actions";
import { Button } from "@material-ui/core";

const PokemonDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const detailPokemon = useSelector((state) => state.detail.detail);
  const catchChance = useSelector((state) => state.detail.catchChance);

  useEffect(() => {
    dispatch(getDetail(name));
  }, []);

  useEffect(() => {
    if (catchChance === true) {
      dispatch(setCatch(detailPokemon));
      alert("success!");
    } else if (catchChance === false) {
      alert("catch failed...");
    }
    dispatch(setCatchChance(null));
  }, [catchChance]);

  const catchPokemon = () => {
    dispatch(getCatchChance());
  };

  return (
    <div className="card-group d-flex justify-content-center">
      <h1>{detailPokemon.name}</h1>
      <Button onClick={catchPokemon} variant="contained" color="primary">
        Catch
      </Button>
    </div>
  );
};
export default PokemonDetail;
