import React from "react";
import Pokemon from "./pokemon.js";

const Pokemon_list = props => {
  const results = props.data;
  let pokemons = results.map(pokemon => <Pokemon />);

  return (
    <ul className="Poke-list">
      <Pokemon />
    </ul>
  );
};

export default Pokemon_list;
