import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Containers/Home";
import "./App.css";
import Navbar from "./Components/Navbar";
import PokemonDetail from "./Containers/PokemonDetail";
import MyPokemon from "./Containers/MyPokemon";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ padding: 20 }}>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/PokemonList"
            render={() => <Navigate to="/" />}
          ></Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:name" element={<PokemonDetail />} />
          <Route exact path="/mypokemon" element={<MyPokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
