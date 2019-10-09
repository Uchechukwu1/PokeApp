import React, { Component } from "react";
import "./PokemonDetails.css";

class Details extends Component {
  state = { details: null };
  componentDidMount() {
    if (this.props.history.location.state)
      fetch(this.props.history.location.state.url)
        .then(x => {
          return x.json();
        })
        .then(x => {
          this.setState({ details: x });
        });
  }
  render() {
    const {
      sprites: { front_default },
      types,
      abilities
    } = this.state.details || { sprites: {} };
    return (
      <div>
        <div className="header">
          <h3>
            <img src={front_default} alt="pokemon" className="logo"></img>
            {this.props.history.location.state &&
              this.props.history.location.state.name}
          </h3>
          <div>
            <span>Type:</span>
            <ul>
              {(types || []).map(x => (
                <li>{x.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <span>Moves:</span>
            <ul>
              {(abilities || []).map(x => (
                <li>{x.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
