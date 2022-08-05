import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <main>
      <div className="container">
        <div class="title">
          <h2>our menu</h2>
          <div class="underline"></div>
        </div>

        <Categories items={items}/>
        <Menu items={items}/>
      </div>
    </main>
  );
}

export default App;
