// Authentication API client
// Calls real backend if available; falls back to mock for demo

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

/**
 * Login with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ok: boolean, token?: string, user?: object, error?: string}>}
 */
export async function login(email, password) {
  try {
    // attempt real API call
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    // handle server errors
    if (!response.ok) {
      let errorMessage = `Server error: ${response.status}`
      try {
        const data = await response.json()
        errorMessage = data.message || errorMessage
      } catch (e) {
        // response not JSON, use default message
      }
      return { ok: false, error: errorMessage }
    }

    // parse successful response
    const data = await response.json()
    return {
      ok: true,
      token: data.token,
      user: data.user || { email },
    }
  } catch (err) {
    // network error or parse error
    console.warn('API call failed, falling back to mock:', err.message)
    return mockLogin(email, password)
  }
}

/**
 * Mock login for demo when backend is unavailable
 * Accepts any email and password === 'password' for demo
 */
function mockLogin(email, password) {
  // simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      if (password === 'password') {
        resolve({
          ok: true,
          token: 'mock-jwt-token-' + Date.now(),
          user: { email },
        })
      } else {
        resolve({
          ok: false,
          error: 'Invalid credentials (demo: try password "password")',
        })
      }
    }, 700)
  })
}
