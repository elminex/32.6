import React from 'react';
import './Player.css';

const Player = ({ playerName, score, updateScore }) => (
<li className="player__item">
  <span className="player__name">{playerName}</span>
  <span className="player__score">{score}</span>
  <button className="player__button" onClick={() => updateScore(1)}>+</button>
  <button className="player__button" onClick={() => updateScore(-1)}>-</button>
</li>);

export default Player;