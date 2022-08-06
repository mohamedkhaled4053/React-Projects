import React from "react";
import { Item } from "./Item";

const List = ({ list, setList, setIsEdit, setEditedItem }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((item, index) => (
          <Item
            key={index}
            index={index}
            title={item}
            list={list}
            setList={setList}
            setIsEdit={setIsEdit}
            setEditedItem={setEditedItem}
          />
        ))}
      </div>
      <button className="clear-btn" onClick={() => setList([])}>
        clear items
      </button>
    </div>
  );
};

export default List;
