import React, { useState, useContext } from "react";
import sublinks from "./data";

let appContext = React.createContext();

function AppProvider({ children }) {
  let [pages, setLinsks] = useState(sublinks);
  let [showSidebar, setShowSidebar] = useState(false);
  let [submenuCont, setSubmenuCont] = useState({ show: false, cont: sublinks[0] });

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  function showSubmenuCont(cont) {
    setSubmenuCont({ show: true, cont });
  }

  function hideSubmenuCont() {
    setSubmenuCont({ ...submenuCont, show: false });
  }

  return (
    <appContext.Provider
      value={{
        pages,
        showSidebar,
        submenuCont,
        toggleSidebar,
        showSubmenuCont,
        hideSubmenuCont,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(appContext);
}

export { useGlobalContext, AppProvider };
