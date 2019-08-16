import React from 'react';
import './ListUtilities.css';

const ListUtilities = ({ sortByName, sortByScore, setPointsCount, setAutosort, autosort }) => (
  <div className="ListUtilities">
    <div className="ListUtilities__sorting">
      <button className="ListUtilities__sortBtn" onClick={sortByName}>Sort by name</button>
      <button className="ListUtilities__sortBtn" onClick={sortByScore}>Sort by points</button>
      <label>
        Autosorting:
        <input type="checkbox" onChange={setAutosort} checked={autosort}/>
      </label>
    </div>
    <label className="ListUtilites__label">
      How many points to add:
      <input className="ListUtilities__input" type="number" onChange={setPointsCount} />
    </label>
  </div>
);

export default ListUtilities;
