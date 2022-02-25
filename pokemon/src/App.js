import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import React from "react";
import Home from "./Containers/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ padding: 20 }}>
        <Routes>
          <Route
            exact
            path="/PokemonList"
            render={() => <Navigate to="/" />}
          ></Route>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
