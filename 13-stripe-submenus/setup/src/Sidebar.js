import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  let { links, showSidebar, toggleSidebar } = useGlobalContext();

  return (
    <div className={`sidebar-wrapper ${showSidebar && 'show'}`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {links.map(({ page, links }) => (
            <article key={page}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map(({label, icon ,url}) => (
                  <a key={label} href={url}>
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
