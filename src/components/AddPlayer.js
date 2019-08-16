import React from 'react';
import './AddPlayer.css';

const AddPlayer = ({ onPlayerAdd }) => {
  let input;
  const onSubmit = (event) => {
    event.preventDefault();
    onPlayerAdd(input.value);
    input.value = '';
  }

  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
      <input type="text" className="AddPlayer__input" ref={node => input = node} required maxLength="12"/>
      <input type="submit" className="AddPlayer__submit" value="Add new player" />
    </form>
  )
};

export default AddPlayer;