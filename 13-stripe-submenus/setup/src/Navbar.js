import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  let { pages, toggleSidebar, showSubmenuCont, hideSubmenuCont } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {pages.map((page) => (
            <li
              key={page.page}
              onMouseEnter={() => showSubmenuCont(page)}
              onMouseLeave={() => hideSubmenuCont()}
            >
              <button className="link-btn">{page.page}</button>
            </li>
          ))}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
