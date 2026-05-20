import React from 'react'

export default function Dashboard({ user, onLogout }) {
  return (
    <section className="card">
      <h2>Dashboard</h2>
      <p className="text-display">Welcome back, {user?.email || 'user'}!</p>

      <div className="button-group">
        <button
          className="btn btn-secondary"
          onClick={() => {
            localStorage.removeItem('authToken')
            onLogout && onLogout()
          }}
        >
          Sign Out
        </button>
      </div>
    </section>
  )
}
