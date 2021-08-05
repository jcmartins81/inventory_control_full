import './App.css'
import React from 'react'
import { Router } from 'react-router-dom'

import Routes from './routes'
import history from '../services/history'
import { AuthProvider } from '../context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  )
}

export default App
