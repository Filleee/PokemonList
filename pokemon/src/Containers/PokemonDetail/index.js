import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, getCatchChance, setCatchChance } from "./actions";
import { setCatch } from "../MyPokemon/actions";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const PokemonDetail = () => {
  const { name } = useParams();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const detailPokemon = useSelector((state) => state.detail.detail);
  const catchChance = useSelector((state) => state.detail.catchChance);

  useEffect(() => {
    dispatch(getDetail(name));
  }, []);

  useEffect(() => {
    if (catchChance === true) {
      setOpen(true);
    } else if (catchChance === false) {
      alert("catch failed...");
    }
    dispatch(setCatchChance(null));
  }, [catchChance]);

  const catchPokemon = () => {
    dispatch(getCatchChance());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCatchNickname = () => {
    setOpen(false);
    // console.log(nickname);
    dispatch(setCatch(detailPokemon, nickname));
    // dispatch(setCatch(detailPokemon));
  };

  const handleNickname = (e) => {
    setNickname("TEST");
    console.log(nickname);
  };

  return (
    <div className="card-group d-flex justify-content-center">
      <h1>{detailPokemon.name}</h1>
      <Button onClick={catchPokemon} variant="contained" color="primary">
        Catch
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Catch Success!</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your pokemon nickname!</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nickname"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={detailPokemon.name}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose}>Cancel</Button>
          <Button onClick={() => handleCatchNickname(nickname)}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PokemonDetail;
