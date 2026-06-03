import React from 'react'

export default function ItemList({ items, loading, error, onRefresh }) {
  return (
    <div style={{ marginTop: 10 }}>
      <strong>Protected data (from API):</strong>
      <div style={{ marginTop: 8 }}>
        {loading && <div className="text-muted">Loading data...</div>}
        {error && <div className="text-display" role="alert">{error}</div>}
        {!loading && !error && items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="text-display" style={{ marginBottom: 8 }}>
                <strong>{item.title || item.name}</strong>
                {item.description && (
                  <div className="text-muted">{item.description}</div>
                )}
              </li>
            ))}
          </ul>
        )}
        {!loading && !error && items.length === 0 && (
          <div className="text-muted">No items found.</div>
        )}
      </div>
      <div className="button-group">
        <button
          className="btn btn-secondary"
          onClick={onRefresh}
          disabled={loading}
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
    </div>
  )
}
