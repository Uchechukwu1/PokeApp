import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//App components
import Home from "./home.js";
import PokemonList from "./Pokemon_list.js";

class App extends Component {
  render() {
    return (
      <div className="body">
        <Home />
        <PokemonList />
      </div>
    );
  }
}

export default App;
