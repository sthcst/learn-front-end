// API client helper that auto-injects Authorization header
// Simplifies making authenticated requests

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

/**
 * Make an authenticated API request
 * Automatically includes Authorization: Bearer <token> header
 * @param {string} endpoint - API endpoint (e.g., '/items', '/users/profile')
 * @param {object} options - fetch options (method, body, headers, etc.)
 * @returns {Promise<{ok: boolean, data?: object, error?: string}>}
 */
export async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('authToken')

  if (!token) {
    return {
      ok: false,
      error: 'No authentication token found. Please log in.',
    }
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...options.headers,
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    })

    // handle non-ok responses
    if (!response.ok) {
      let errorMessage = `Server error: ${response.status}`
      try {
        const data = await response.json()
        errorMessage = data.message || errorMessage
      } catch (e) {
        // response not JSON
      }
      return { ok: false, error: errorMessage }
    }

    // parse successful response
    const data = await response.json()
    return { ok: true, data }
  } catch (err) {
    console.error('API call failed:', err.message)
    return {
      ok: false,
      error: err.message || 'Network error. Please try again.',
    }
  }
}

/**
 * GET request helper
 */
export function apiGet(endpoint) {
  return apiCall(endpoint, { method: 'GET' })
}

/**
 * POST request helper
 */
export function apiPost(endpoint, body) {
  return apiCall(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

/**
 * PUT request helper
 */
export function apiPut(endpoint, body) {
  return apiCall(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
  })
}

/**
 * DELETE request helper
 */
export function apiDelete(endpoint) {
  return apiCall(endpoint, { method: 'DELETE' })
}
