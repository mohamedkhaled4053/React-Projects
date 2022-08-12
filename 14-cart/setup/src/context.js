import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)
  let [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(res=> {
      setCart(res)
      setLoading(false)
    })
  },[])

  return (
    <AppContext.Provider
      value={{
        cart,
        loading
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
