import React from "react";
import { Item } from "./Item";

const List = ({ list, clear, handleEdit, deleteItem }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((item, index) => (
          <Item
            key={index}
            index={index}
            title={item}
            handleEdit={handleEdit}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <button className="clear-btn" onClick={clear}>
        clear items
      </button>
    </div>
  );
};

export default List;
