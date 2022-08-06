import React from "react";
import { Item } from "./Item";

const List = ({ list, setList }) => {

  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((item, index) => (
          <Item key={index} title={item} list={list} setList={setList}/>
        ))}
      </div>
      <button className="clear-btn" onClick={()=> setList([])}>clear items</button>
    </div>
  );
};

export default List;
