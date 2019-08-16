import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';
import ListUtilities from './components/ListUtilities';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pointsMultiplier: 1,
      players: [],
      autosort: false,
    }
  }

  setPointsCount = (e) => {
    this.setState({ pointsMultiplier: e.target.value })
  }

  onPlayerAdd = (playerName) => {
    const bgColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 50%)`;
    const newPlayer = {
      name: playerName,
      score: 0,
      color: bgColor,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  }

  onNameChange = (i) => {
    const newName = window.prompt('Enter new name');
    const changed = this.state.players.map((elem, index) => {
      if (index === i) {
        elem.name = newName;
        return elem;
      }
      return elem;
    });
    this.setState({ players: changed })
  }

  onPlayerRemove = (i) => {
    const filtered = this.state.players.filter((elem, index) => index !== i)
    this.setState({ players: filtered })
  }

  onScoreUpdate = i => {
    const players = this.state.players.map((player, index) => (index === i ? Object.assign({}, player, { score: player.score + parseInt(this.state.pointsMultiplier) }) : player));
    if (this.state.autosort) {
      const playersSorted = players.sort((a, b) => b.score - a.score);
      this.setState({ players: playersSorted });
    } else {
      this.setState({ players })
    }

  }

  onSortByName = () => {
    const sortedByName = this.state.players.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ players: sortedByName })
  }

  onSortByScore = () => {
    const sortedByPoints = this.state.players.sort((a, b) => b.score - a.score)
    this.setState({ players: sortedByPoints });
  }

  setAutosort = (e) => {
    this.setState({ autosort: e.currentTarget.checked })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__header">Score board!!</h1>
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <ListUtilities sortByName={this.onSortByName} sortByScore={this.onSortByScore} setPointsCount={this.setPointsCount} setAutosort={this.setAutosort} autosort={this.state.autosort} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} onNameChange={this.onNameChange} />
      </div>
    );
  }
}

export default App;