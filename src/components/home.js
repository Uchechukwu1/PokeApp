import React from "react";
import "./home.css";
import pokes from "./pokes.PNG";

const home = () => {
  return (
    <div>
      <div className="container">
        <div className="img">
          <img src={pokes} alt="logo" width="50px" className="logo" />
        </div>
      </div>

      <div className="header">
        <h1>Welcome to PokeApp!</h1>
        <br />

        <button className="button">Go!</button>
      </div>
    </div>
  );
};

export default home;
