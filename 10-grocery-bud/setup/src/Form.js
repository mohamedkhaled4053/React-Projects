import React, { useState, useEffect } from "react";

export function Form({
  list,
  setList,
  isEdit,
  editedItem,
  setIsEdit,
  setAlert,
  alertValues,
}) {
  let [newItem, setNewItem] = useState("");

  useEffect(() => {
    if (isEdit) {
      let input = document.querySelector("input");
      input.focus();
      setNewItem(list[editedItem]);
    }
  }, [isEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim()) {
      if (!isEdit) {
        setList([...list, newItem]);
        setAlert(alertValues.add);
      } else {
        let newList = [...list];
        newList.splice(editedItem, 1, newItem);
        setList(newList);
        setIsEdit(false);
        setAlert(alertValues.edit)
      }
      setNewItem("");
    } else {
      setAlert(alertValues.noInput)
    }
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
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEdit ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}
