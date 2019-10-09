import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//App components
import Home from "./home.js";
import PokemonList from "./Pokemon_list.js";
import PokemonDetails from "./PokemonDetails.js";

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
