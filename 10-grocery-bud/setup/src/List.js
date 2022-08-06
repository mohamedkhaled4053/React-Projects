import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";


const List = () => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        <article className="grocery-item">
          <p className="title">2</p>
          <div className="btn-container">
            <button type="button" className="edit-btn">
              <FaEdit />
            </button>
            <button type="button" className="delete-btn">
              <FaTrash />
            </button>
          </div>
        </article>
      </div>
      <button className="clear-btn">clear items</button>
    </div>
  );
};

export default List;
