import React from 'react';
import Player from './Player';
import './PlayerList.css';

const PlayersList = ({ players, onScoreUpdate }) => (
  <ul className="player__list">
    {players.map((player, i) => (
      <Player
        playerName={player.name}
        score={player.score}
        key={i}
        updateScore={(points) => onScoreUpdate(i, points)}
      />)
    )}
  </ul>
);

export default PlayersList;
