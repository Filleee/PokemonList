import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, getCatchChance, setCatchChance } from "./actions";
import { setCatch } from "../MyPokemon/actions";
import { useStyles } from "./style";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const PokemonDetail = () => {
  const { name } = useParams();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const detailPokemon = useSelector((state) => state.detail.detail);
  const catchChance = useSelector((state) => state.detail.catchChance);

  useEffect(() => {
    dispatch(getDetail(name));
  }, [name]);

  useEffect(() => {
    if (catchChance === true) {
      setOpen(true);
    } else if (catchChance === false) {
      alert("catch failed...");
    }
    if (catchChance !== null) dispatch(setCatchChance(null));
  }, [catchChance]);

  const catchPokemon = () => {
    dispatch(getCatchChance());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCatchNickname = () => {
    setOpen(false);
    dispatch(setCatch(detailPokemon, nickname));
  };

  const classes = useStyles();

  return (
    <div style={{ marginTop: 20 }}>
      {detailPokemon.sprites && (
        <Box display="flex" justifyContent="center">
          <Card className={classes.root}>
            <h1>{detailPokemon.name}</h1>
            <CardActionArea>
              <img
                src={detailPokemon.sprites.front_default}
                className={classes.media}
                alt="Pokemon"
              ></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Types : <br />
                  {detailPokemon.types.map((types, index) =>
                    index === detailPokemon.types.length - 1
                      ? `${types.type.name}`
                      : `${types.type.name}, `
                  )}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  align="justify"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Moves : <br />
                  {detailPokemon.moves.map((moves, index) =>
                    index === detailPokemon.moves.length - 1
                      ? `${moves.move.name}`
                      : `${moves.move.name}, `
                  )}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={catchPokemon}
                variant="contained"
                color="primary"
              >
                Catch
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}

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
