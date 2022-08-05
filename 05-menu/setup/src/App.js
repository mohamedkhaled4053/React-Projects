import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  let [showen, setShowen] = useState("all");

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories items={items} setShowen={setShowen} />
        <Menu items={items} showen={showen} />
      </div>
    </main>
  );
}

export default App;
