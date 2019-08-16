import React from 'react';
import './Player.css';

const Player = ({ color, playerName, score, updateScore, removePlayer, changeName }) => {
  return (
    <li className="player__item" style={{ backgroundColor: color }}>
      <button onClick={changeName} className="player__name">{playerName}</button>
      <span className="player__score">{score}</span>
      <button className="player__button" onClick={() => updateScore()}>+</button>
      <button className="player__button" onClick={() => updateScore()}>-</button>
      <button className="player__button" onClick={() => removePlayer()}>Remove player</button>
    </li>)
};

export default Player;