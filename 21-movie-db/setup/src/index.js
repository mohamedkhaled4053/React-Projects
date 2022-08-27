import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <>
    <AppProvider>
      <App />
    </AppProvider>
  </>,
  document.getElementById('root')
)
