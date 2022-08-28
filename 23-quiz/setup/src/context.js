import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  let [query, setQuery] = useState({
    amount : 5,
    category: 'sports',
    difficulty: 'easy'
  })
  let [loading, setLoading] = useState(false)

  return <AppContext.Provider value={{table, query, setQuery, loading, setLoading}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
