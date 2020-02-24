import React, { Component } from "react";
import axios from "axios";
import Player from "./Player";

export default class List extends Component {
    constructor() {
    super();
    this.state = {
        players: []
    };
    }
    componentDidMount() {
    this.getPlayers();
    }

    getPlayers = () => {
    axios
    .get("http://localhost:5000/api/players")
    .then(res => {
        console.log(res.data);
        this.setState({ players: res.data });
    })
        .catch(err => console.log("noooo"));
    };

  render() {
    return (
      <div className="card-container">
        {this.state.players.map((player, index) => {
          return <Player player={player} key={index} />;
        })}
      </div>
    );
  }
}
