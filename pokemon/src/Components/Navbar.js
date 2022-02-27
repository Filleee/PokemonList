import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";
import { Link } from "@material-ui/core";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const updateSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchPokemon = (e) => {
    if (e.keyCode === 13) navigate(`/detail/${search}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            className={classes.title}
            variant="h6"
            noWrap
          >
            <Link
              component="button"
              variant="body2"
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Link>
          </Typography>
          <Typography
            onClick={() => navigate("/mypokemon")}
            className={classes.title}
            variant="h6"
            noWrap
          >
            <Link
              component="button"
              variant="body2"
              color="inherit"
              onClick={() => {
                navigate("/mypokemon");
              }}
            >
              My Pokemon
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={updateSearch}
              onKeyDown={searchPokemon}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
