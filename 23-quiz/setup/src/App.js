import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
import Quiz from './Quiz'


function App() {
  let {loading} = useGlobalContext()

  if(loading){
    return <Loading />
  }
  return <SetupForm />
}

export default App
