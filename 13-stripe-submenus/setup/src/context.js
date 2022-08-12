import React, { useState, useContext } from "react";
import sublinks from "./data";

let appContext = React.createContext();

function AppProvider({ children }) {
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
        sublinks,
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
