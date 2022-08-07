import React from "react";
import { Item } from "./Item";

const List = ({
  list,
  setList,
  setIsEdit,
  setEditedItem,
  setAlert,
  alertValues,
}) => {
  let clear = () => {
    setList([]);
    setAlert(alertValues.clear);
  };

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
            setAlert={setAlert}
            alertValues={alertValues}
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
