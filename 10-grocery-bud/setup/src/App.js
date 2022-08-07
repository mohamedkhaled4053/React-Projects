import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { Form } from "./Form";

function App() {
  // states--------------------
  let [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || ["2"]);
  let [isEdit, setIsEdit] = useState(false);
  let [editedItem, setEditedItem] = useState(null);
  let [alert, setAlert] = useState(null);

  // variablesppp-----------------------
  // to recognize the change that happend
  let alertValues = {
    add: "Item Added To The List",
    edit: "Value Changed",
    remove: "Item Removed",
    clear: "Empty List",
    noInput: "Please Enter Value",
  };

  // functions------------------------
  function handleSubmit(e, newItem) {
    e.preventDefault();
    if (newItem.trim()) {
      if (!isEdit) {
        // add new item and make alert
        setList([...list, newItem]);
        setAlert(alertValues.add);
      } else {
        // when Edit
        // replace the item and make alert and cancle edit mode
        let newList = [...list];
        newList.splice(editedItem, 1, newItem);
        setList(newList);
        setIsEdit(false);
        setAlert(alertValues.edit);
      }
    } else {
      // if no input make alert
      setAlert(alertValues.noInput);
    }
  }

  function deleteItem(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setAlert(alertValues.remove);
  }

  // begin edit mode and recognize the edited item
  // wait for the new value that would be submited
  function handleEdit(index) {
    setIsEdit(true);
    setEditedItem(index);
  }

  let clear = () => {
    setList([]);
    setAlert(alertValues.clear);
  };

  // effects--------------------------

  // remove alert every 3 seconds
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  },[list, alert]);

  // store list in locale storage when changed
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  },[list]);

  // JSX---------------------------
  return (
    <section className="section-center">
      <Form
        isEdit={isEdit}
        handleSubmit={handleSubmit}
        list={list}
        editedItem={editedItem}
      />

      <List
        list={list}
        deleteItem={deleteItem}
        handleEdit={handleEdit}
        clear={clear}
      />

      {alert && <Alert alert={alert} alertValues={alertValues} />}
    </section>
  );
}

export default App;
