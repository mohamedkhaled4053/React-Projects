import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <button class="sidebar-toggle">
        <FaBars />
      </button>
      <button class="btn">show modal</button>
    </main>
  );
};

export default Home;
