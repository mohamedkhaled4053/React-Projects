import React, { useState, useEffect } from "react";

export function Form({ isEdit, handleSubmit, list, editedItem }) {
  let [newItem, setNewItem] = useState("");

  // in edit mode focus in input and dispaly the value of targeted item
  useEffect(() => {
    if (isEdit) {
      let input = document.querySelector("input");
      input.focus();
      setNewItem(list[editedItem]);
    }
  }, [isEdit, list, editedItem]);

  return (
    <form
      className="grocery-form"
      onSubmit={(e) => {
        handleSubmit(e, newItem);
        setNewItem("");
      }}
    >
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
