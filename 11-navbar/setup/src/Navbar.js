import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  let [show, setShow] = useState(false);
  let linksContainer = useRef(null);
  let linksUl = useRef(null);

  useEffect(() => {
    if (show) {
      linksContainer.current.style.height = linksUl.current.scrollHeight + "px";
    } else {
      linksContainer.current.style.height = "0px";
    }
  },[show]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={() => setShow(!show)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={linksUl}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
