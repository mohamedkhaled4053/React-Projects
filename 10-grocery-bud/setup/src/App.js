import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { Form } from "./Form";

function App() {
  let [list, setList] = useState(["2"]);
  let [isEdit, setIsEdit] = useState(false);
  let [editedItem, setEditedItem] = useState(null);
  let [alert, setAlert] = useState(null);

  let alertValues = {
    add: "Item Added To The List",
    edit: "Value Changed",
    remove: "Item Removed",
    clear: "Empty List",
    noInput: "Please Enter Value",
  };

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setAlert(null);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // },[alert]);

  return (
    <section className="section-center">
      <Form
        list={list}
        setList={setList}
        isEdit={isEdit}
        editedItem={editedItem}
        setIsEdit={setIsEdit}
        setAlert={setAlert}
        alertValues={alertValues}
      />

      <List
        list={list}
        setList={setList}
        setIsEdit={setIsEdit}
        setEditedItem={setEditedItem}
      />

      {alert && <Alert alert={alert} alertValues={alertValues} />}
    </section>
  );
}

export default App;
