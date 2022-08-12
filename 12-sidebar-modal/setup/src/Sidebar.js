import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import context from "./context";

const Sidebar = () => {
  let { toggleSidebar, showSidebar } = useContext(context);

  return (
    <aside className={`sidebar ${showSidebar&&'show-sidebar'}`}>
      <div className="sidebar-header">
        <img
          src={logo}
          className="logo"
          alt="coding addict"
        />
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map(({id, url, icon}) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
