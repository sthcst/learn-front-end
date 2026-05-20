import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // check for token to simulate persisted login
    const token = localStorage.getItem('authToken')
    if (token) {
      // In a real app we'd fetch the user profile here.
      setUser({ email: 'demo@example.com' })
    }
  }, [])

  function handleLoginSuccess(profile) {
    setUser(profile)
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <div className="container">
      <h1>Learn React — Week 2</h1>
      <Header />

      {!user ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}

      <footer>
        Built for practice — week 2 milestones: components, useState, and basic interactions.
      </footer>
    </div>
  )
}
