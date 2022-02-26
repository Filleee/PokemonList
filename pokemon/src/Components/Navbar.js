import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"}>
        <p className="navbar-brand" href="#">
          PokeList
        </p>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={"/"}>
              <p className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </p>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to={"/mypokemon"}>
              <p className="nav-link" href="#">
                MyPokemon<span className="sr-only">(current)</span>
              </p>
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={updateSearch}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Enter Name/PokedexID"
            aria-label="Search"
          />
          <Link to={`/detail/${search}`}>
            <button
              onClick={() => setSearch(search)}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
