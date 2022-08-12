import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import context from "./context";

const Home = () => {
  let {toggleModal, toggleSidebar} = useContext(context)

  return (
    <main>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={toggleModal}>show modal</button>
    </main>
  );
};

export default Home;
