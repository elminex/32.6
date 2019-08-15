import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onScoreUpdate = (i, points) => {
    this.setState({
      players: this.state.players.map((player, index) => (index === i ? Object.assign({}, player, { score: player.score + points }) : player))
    });
  }

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} />
      </div>
    );
  }
}

export default App;