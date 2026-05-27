import React, { useState } from 'react'
import { login } from '../api/auth'

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

    // Call real auth API
    const result = await login(email, password)

    if (result.ok) {
      // store token
      localStorage.setItem('authToken', result.token)
      onLoginSuccess && onLoginSuccess(result.user || { email })
    } else {
      // show server/network error
      setError(result.error || 'Login failed')
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
