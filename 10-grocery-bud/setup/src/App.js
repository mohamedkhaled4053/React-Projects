import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { Form } from "./Form";

function App() {
  let [list, setList] = useState(["2"]);

  function addNewItem(event, newItem) {
    event.preventDefault();
    setList([...list, newItem]);
  }

  return (
    <section className="section-center">
      <Form list={list} setList={setList} />

      <List list={list} setList={setList} />

      <Alert />
    </section>
  );
}

export default App;
