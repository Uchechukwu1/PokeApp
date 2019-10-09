import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//App components
import Home from "./home.js";
import PokemonList from "./Pokemon_list.js";
import PokemonDetails from "./PokemonDetails.js";

const routes = [
  {
    path: "/pokemon/details",
    component: PokemonDetails,
    exact: false,
    breadCrumb: ({ history }) => (
      <span>&nbsp;>&nbsp;{history.location.state.name}</span>
    )
  },
  {
    path: "/pokemon",
    exact: true,
    component: PokemonList,
    breadCrumb: () => <Link to="/pokemon">&nbsp;>&nbsp;Pokemon</Link>
  },
  {
    path: "*",
    component: Home,
    exact: false,
    breadCrumb: () => <Link to="/">PokeApp</Link>
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* there seems to be a bug that requires this reversal to be done here */}
          {routes.reverse().map(x => (
            <Route path={x.path} key={x.path} component={x.breadCrumb}></Route>
          ))}
        </div>
        <div className="body">
          <Switch>
            {/* there seems to be a bug that requires this reversal to be done here */}
            {routes.reverse().map(x => (
              <Route
                path={x.path}
                key={x.path}
                exact={x.exact}
                component={x.component}
              ></Route>
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
