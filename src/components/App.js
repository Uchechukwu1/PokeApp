import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//App components
import Home from "./home.js";
import PokemonList from "./Pokemon_list.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ pokemon: responseData.results });
      })

      .catch(error => {
        console.log("error fetching and parsing data", error);
      });
  }
  render() {
    console.log(this.state.pokemon);
    return (
      <div className="body">
        <Home />
        <PokemonList data={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
