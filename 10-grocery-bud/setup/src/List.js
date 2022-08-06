import React from "react";
import { Item } from "./Item";

const List = ({ list }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((item) => (
          <Item title={item}/>
        ))}
      </div>
      <button className="clear-btn">clear items</button>
    </div>
  );
};

export default List;
