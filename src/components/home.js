import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import pokes from "./pokes.PNG";

const home = () => {
  return (
    <div>
      <div className="container">
        <div className="img">
          <img src={pokes} alt="logo" width="120px" className="logo" />
        </div>
      </div>

      <div className="header">
        <h1>Welcome to PokeApp!</h1>
        <br />

        <Link to="/pokemon" className="button">
          Go!
        </Link>
      </div>
    </div>
  );
};

export default home;
