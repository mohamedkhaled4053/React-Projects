import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  let { sublinks, toggleSidebar, showSubmenuCont, hideSubmenuCont } = useGlobalContext();

  function handleHover(e){
    if (!e.target.classList.contains('link-btn')) {
      hideSubmenuCont()
    }
  }

  return (
    <nav className="nav" onMouseOver={handleHover}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((sublink) => (
            <li
              key={sublink.page}
              onMouseEnter={(e) => showSubmenuCont(sublink, e.target)}
            >
              <button className="link-btn">{sublink.page}</button>
            </li>
          ))}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
