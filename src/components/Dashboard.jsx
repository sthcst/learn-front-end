import React, { useEffect, useState } from 'react'
import { apiGet } from '../api/client'
import { fetchProtectedData } from '../api/mockData'
import ItemList from './ItemList'

export default function Dashboard({ user, onLogout }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [count, setCount] = useState(0)

  async function loadData() {
    setLoading(true)
    setError('')
    try {
      // Try to fetch from real API first
      const result = await apiGet('/items')
      if (result.ok) {
        setItems(result.data || [])
      } else {
        // Fall back to mock if API unavailable
        console.warn('Real API unavailable, using mock data:', result.error)
        const mockData = await fetchProtectedData(localStorage.getItem('authToken'))
        setItems(mockData)
      }
    } catch (err) {
      console.warn('Error loading data:', err.message)
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

      <div style={{ marginTop: 10 }}>
        <strong>Interactive counter:</strong>
        <div className="button-group" style={{ justifyContent: 'flex-start', marginTop: 8 }}>
          <button className="btn btn-secondary" onClick={() => setCount((c) => c - 1)}>-</button>
          <div style={{ padding: '12px 20px', background: '#f7fafc', borderRadius: 8 }}>{count}</div>
          <button className="btn btn-success" onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>

      <ItemList
        items={items}
        loading={loading}
        error={error}
        onRefresh={loadData}
      />

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
