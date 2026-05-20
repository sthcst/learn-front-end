import React, { useState } from 'react'

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function validate() {
    if (!email.trim() || !password.trim()) {
      setError('Email and password are required.')
      return false
    }
    // very small email format check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return false
    }
    setError('')
    return true
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)

    // Simulated API request (replace with real fetch/axios later)
    await new Promise((r) => setTimeout(r, 700))

    // Fake success when password is "password" — just for demo
    if (password === 'password') {
      // store a fake token
      localStorage.setItem('authToken', 'fake-jwt-token')
      onLoginSuccess && onLoginSuccess({ email })
    } else {
      setError('Invalid credentials (demo expects password = "password").')
    }

    setLoading(false)
  }

  return (
    <section className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <input
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        {error && <div className="text-display" role="alert">{error}</div>}

        <div className="button-group">
          <button className="btn btn-success" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
      </form>
    </section>
  )
}
