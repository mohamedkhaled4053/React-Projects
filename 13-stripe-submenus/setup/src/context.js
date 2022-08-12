import React, { useState, useContext } from "react";
import sublinks from "./data";

let appContext = React.createContext();

function AppProvider({ children }) {
    let [links, setLinsks] = useState(sublinks)
    let [showSidebar, setShowSidebar] = useState(false)
    let [showSubmenu, setShowSubmenu] = useState(false)

    function toggleSidebar() {
        setShowSidebar(!showSidebar)
    }

  return <appContext.Provider value={{links, showSidebar,showSubmenu, toggleSidebar}}>
        {children}
    </appContext.Provider>;
}

function useGlobalContext(){
    return useContext(appContext)
}

export { useGlobalContext, AppProvider };
