import React, { useRef, useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import context from './context'


function App() {
  let [showModal, setShowModal] =useState(false)
  let [showSidebar, setShowSidebar] =useState(false)

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }
  
  function toggleModal() {
    setShowModal(!showModal)
  }

  return (
    <context.Provider value={{toggleModal, toggleSidebar, showModal, showSidebar}}>
      <Home />
      <Sidebar />
      <Modal />
    </context.Provider>
  )
}

export default App
