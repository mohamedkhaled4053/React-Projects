import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export function Item({ title, list, setList }) {
  return (
    <article className="grocery-item">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn">
          <FaEdit />
        </button>
        <button type="button" className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </article>
  );
}
