// Mock protected data fetcher used by Dashboard for demo purposes

export async function fetchProtectedData(token) {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 600))

  // simulate auth check
  if (!token || token !== 'fake-jwt-token') {
    const err = new Error('Unauthorized - no valid token provided')
    err.status = 401
    throw err
  }

  // return some mock items
  return [
    { id: 1, title: 'Item One', description: 'This is the first protected item.' },
    { id: 2, title: 'Item Two', description: 'This is another protected item with more details.' },
    { id: 3, title: 'Item Three', description: 'Final sample item.' },
  ]
}
