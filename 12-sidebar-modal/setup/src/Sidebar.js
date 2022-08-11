import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  return (
    <aside class="sidebar show-sidebar">
      <div class="sidebar-header">
        <img
          src="/static/media/logo.2bb7da65.svg"
          class="logo"
          alt="coding addict"
        />
        <button class="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul class="links">
        <li>
          <a href="/">
            {/* {icon here} */}
            home
          </a>
        </li>
      </ul>
      <ul class="social-icons">
        <li>
          <a href="https://www.twitter.com">
            {/* {icon here} */}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
