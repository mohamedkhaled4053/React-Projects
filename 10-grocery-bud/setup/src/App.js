import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { Form } from "./Form";

function App() {
  // states
  let [list, setList] = useState(["2"]);
  let [newItem, setNewItem] = useState("");
  let [isEdit, setIsEdit] = useState(false);
  let [editedItem, setEditedItem] = useState(null);
  let [alert, setAlert] = useState(null);

  // variables
  let alertValues = {
    add: "Item Added To The List",
    edit: "Value Changed",
    remove: "Item Removed",
    clear: "Empty List",
    noInput: "Please Enter Value",
  };

  // functions
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim()) {
      if (!isEdit) {
        setList([...list, newItem]);
        setAlert(alertValues.add);
      } else {
        let newList = [...list];
        newList.splice(editedItem, 1, newItem);
        setList(newList);
        setIsEdit(false);
        setAlert(alertValues.edit);
      }
      setNewItem("");
    } else {
      setAlert(alertValues.noInput);
    }
  }

  function deleteItem(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    setAlert(alertValues.remove);
  }

  function handleEdit(index) {
    setIsEdit(true);
    setEditedItem(index);
  }

  let clear = () => {
    setList([]);
    setAlert(alertValues.clear);
  };

  // effects
  useEffect(() => {
    if (isEdit) {
      let input = document.querySelector("input");
      input.focus();
      setNewItem(list[editedItem]);
    }
  }, [isEdit, list, editedItem]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  // JSX
  return (
    <section className="section-center">
      <Form
        isEdit={isEdit}
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
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
