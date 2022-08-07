import React from "react";

export function Form({ isEdit, newItem, setNewItem, handleSubmit }) {
  return (
    <form className="grocery-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g. eggs"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEdit ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}
