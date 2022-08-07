import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export function Item({
  title,
  index,
  handleEdit,
  deleteItem
}) {


  return (
    <article className="grocery-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={()=>handleEdit(index)}>
          <FaEdit />
        </button>
        <button type="button" className="delete-btn" onClick={()=>deleteItem(index)}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
}
