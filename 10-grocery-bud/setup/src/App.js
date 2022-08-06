import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { Form } from "./Form";

function App() {
  let [list, setList] = useState(["2"]);
  let [isEdit, setIsEdit] = useState(false);
  let [editedItem, setEditedItem] = useState(null);

  return (
    <section className="section-center">
      <Form
        list={list}
        setList={setList}
        isEdit={isEdit}
        editedItem={editedItem}
        setIsEdit={setIsEdit}
      />

      <List
        list={list}
        setList={setList}
        setIsEdit={setIsEdit}
        setEditedItem={setEditedItem}
      />

      <Alert />
    </section>
  );
}

export default App;
