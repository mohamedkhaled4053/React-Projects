import React, { useState } from "react";

export function Form({ list, setList }) {
  let [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, newItem]);
    setNewItem('');
  }

  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g. eggs"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit" className="submit-btn">
          submit
        </button>
      </div>
    </form>
  );
}
