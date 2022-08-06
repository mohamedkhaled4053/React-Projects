import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export function Item({ title, list, setList, index }) {

  function deleteItem(e) {
    let newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  return (
    <article className="grocery-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn">
          <FaEdit />
        </button>
        <button type="button" className="delete-btn" onClick={deleteItem}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
}
