import React, { useState, useContext } from "react";
import sublinks from "./data";

let appContext = React.createContext();

function AppProvider({ children }) {
    let [links, setLinsks] = useState(sublinks)

  return <appContext.Provider value={{links}}>
        {children}
    </appContext.Provider>;
}

function useGlobalContext(){
    return useContext(appContext)
}

export { useGlobalContext, AppProvider };
