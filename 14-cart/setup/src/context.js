import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  let initState ={
    cart: [],
    loading: true
  }

  let [state, dispatch] = useReducer(reducer, initState)

  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(res=> {
      dispatch({type: 'GET_DATA',payload: res})
    })
  },[])

  return (
    <AppContext.Provider
      value={{
        ...state,

      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
