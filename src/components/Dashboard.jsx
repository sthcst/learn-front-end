import React, { useEffect, useState } from 'react'
import { fetchProtectedData } from '../api/mockData'

export default function Dashboard({ user, onLogout }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [count, setCount] = useState(0)

  async function loadData() {
    setLoading(true)
    setError('')
    try {
      const token = localStorage.getItem('authToken')
      const data = await fetchProtectedData(token)
      setItems(data)
    } catch (err) {
      setError(err.message || 'Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="card">
      <h2>Dashboard</h2>
      <p className="text-display">Welcome back, {user?.email || 'user'}!</p>

      <div style={{ marginBottom: 12 }}>
        <strong>Interactive counter:</strong>
        <div className="button-group" style={{ justifyContent: 'flex-start', marginTop: 8 }}>
          <button className="btn btn-secondary" onClick={() => setCount((c) => c - 1)}>-</button>
          <div style={{ padding: '12px 20px', background: '#f7fafc', borderRadius: 8 }}>{count}</div>
          <button className="btn btn-success" onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <strong>Protected data (mock):</strong>
        <div style={{ marginTop: 8 }}>
          {loading && <div className="text-muted">Loading data...</div>}
          {error && <div className="text-display" role="alert">{error}</div>}
          {!loading && !error && (
            <ul>
              {items.map((it) => (
                <li key={it.id} className="text-display" style={{ marginBottom: 8 }}>
                  <strong>{it.title}</strong>
                  <div className="text-muted">{it.description}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="button-group">
          <button className="btn btn-secondary" onClick={loadData} disabled={loading}>Refresh</button>
        </div>
      </div>

      <div className="button-group" style={{ marginTop: 18 }}>
        <button
          className="btn btn-danger"
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
