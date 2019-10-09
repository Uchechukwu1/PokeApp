import React, { Component } from "react";


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