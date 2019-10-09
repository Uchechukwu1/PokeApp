import React, { Component } from "react";
import "./Pokimon_list.css";

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      limit: 10,
      query: "",
      total: 0,
      pokemon: [],
      next: null,
      previous: null,
      filteredResults: []
    };
  }

  componentDidMount() {
    this.retrieveList();
  }

  retrieveList = url => {
    const { limit, query } = this.state;
    fetch(
      url || `https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${limit}`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          pokemon: responseData.results,
          filteredResults: this.filterResults(query, responseData.results),
          next: responseData.next,
          previous: responseData.previous,
          total: responseData.count
        });
      })

      .catch(error => {
        console.log("error fetching and parsing data", error);
      });
  };
  openDetails = pokemon => {
    // open details page the selected pokemon
    this.props.history.push("/pokemon/details/", pokemon);
  };
  goToNext = () => {
    this.retrieveList(this.state.next);
  };
  goToPrevious = () => {
    this.retrieveList(this.state.previous);
  };
  filterResults = (query, list) => {
    const ex = new RegExp(`^${query}`, "igm");
    return list.filter(x => ex.test(x.name));
  };
  filter = e => {
    const { pokemon } = this.state;
    this.setState({
      query: e.target.value,
      filteredResults: this.filterResults(e.target.value, pokemon)
    });
  };
  render() {
    const {
      next,
      previous,
      total,
      query,
      filteredResults,
      pokemon
    } = this.state;
    return (
      <div className="list">
        <div>
          <input name="search" value={query} onChange={this.filter} />
        </div>
        {((query && filteredResults) || pokemon).map(pokemon => (
          <div key={pokemon.name} onClick={() => this.openDetails(pokemon)}>
            {pokemon.name}
          </div>
        ))}
        {previous && <button onClick={this.goToPrevious}>previous</button>}
        {next && <button onClick={this.goToNext}>next</button>}
        <br />
        <br />
        <br />
        <span>there are {total} pokemons</span>
      </div>
    );
  }
}

export default PokemonList;
