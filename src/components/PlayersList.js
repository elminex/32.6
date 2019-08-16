import React from 'react';
import Player from './Player';
import './PlayersList.css';

const PlayersList = ({ players, onScoreUpdate, onPlayerRemove, onNameChange }) => (
  players.length === 0 ? <h2 className="playerList__title">No players, please add some using the input above.</h2> :
  <ul className="playerList">
    {players.map((player, i) => (
      <Player
        color={player.color}
        playerName={player.name}
        score={player.score}
        key={i}
        updateScore={(points) => onScoreUpdate(i, points)}
        removePlayer={() => onPlayerRemove(i)}
        changeName={() => { onNameChange(i) }}
      />)
    )}
  </ul>
);

export default PlayersList;
