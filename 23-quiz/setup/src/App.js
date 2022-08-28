import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
import Quiz from './Quiz'


function App() {
  let {loading, quiz} = useGlobalContext()

  if(loading){
    return <Loading />
  }
  if (quiz.show) {
    return <Quiz />
  }
  return <SetupForm />
}

export default App
