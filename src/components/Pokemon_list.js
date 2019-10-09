import React, { Component } from "react";
import "./Pokimon_list.css";

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    for (let i = 1; i < 10; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(responseData => {
          this.setState({ pokemon: responseData });
        })

        .catch(error => {
          console.log("error fetching and parsing data", error);
        });
    }
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <div>
        {this.state.pokemon.map((pokemons, key) => (
          <div>{pokemons.name}</div>
        ))}
      </div>
    );
  }
}

export default PokemonList;
