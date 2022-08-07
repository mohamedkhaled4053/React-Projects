import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export function Item({
  title,
  list,
  setList,
  index,
  setIsEdit,
  setEditedItem,
  setAlert,
  alertValues
}) {
  function deleteItem() {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setAlert(alertValues.remove)
  }

  function handleEdit() {
    setIsEdit(true);
    setEditedItem(index);
  }

  return (
    <article className="grocery-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={handleEdit}>
          <FaEdit />
        </button>
        <button type="button" className="delete-btn" onClick={deleteItem}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
}
