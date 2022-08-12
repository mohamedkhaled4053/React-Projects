import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  let { submenuCont } = useGlobalContext();
  let {
    show,
    cont: { page, links },
    position
  } = submenuCont;

  return (
    <aside className={`submenu ${show && "show"}`} style={{left: position +'px'}}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${links.length}`}>
          {links.map(({ url, label, icon }) => (
            <a href={url}>
              {icon}
              {label}
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
