import React from "react";
import "./Nav.css";
import pokemon from "./pokemon.jpg";

const navbar = () => {
  return (
    <div className="container">
      <a href="www.google.com">
        <img src={pokemon} alt="logo" width="200px" className="logo" />
      </a>
    </div>
  );
};

export default navbar;
