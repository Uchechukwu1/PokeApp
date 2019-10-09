import React from "react";

const Pokemon = props => {
  console.log(props.url);
  return <li>{props.url}</li>;
};

export default Pokemon;
