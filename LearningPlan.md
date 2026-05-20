# learn-front-end

# Learning Plan — React Frontend (4 Weeks)

## Overview

**Technology:** React
**Current Knowledge:** Basic HTML and CSS, beginner-level JavaScript
**Goal:** Build a frontend that connects to a REST API with authentication (login + authenticated requests) by the end of Week 5
**Time Commitment:** 12 hours per week

This plan focuses on learning React fundamentals, handling forms, implementing authentication, and connecting to a REST API.

---

## Week 2 — React Fundamentals + Basic UI

### Goal

Learn core React concepts and build the basic structure of your app.

### Topics

- JSX
- Functional components
- Props
- State (`useState`)
- Event handling

### Resources

- React Official Docs: https://react.dev/learn
- Beginner Tutorial: https://www.youtube.com/watch?v=bMknfKXIFA8

### Milestones

- Set up a React app using Vite
- Create components (Header, LoginForm, Dashboard placeholder)
- Use `useState` for form inputs
- Handle basic user interactions (clicks, typing)

---

## Week 3 — Forms + Authentication

### Goal

Build a functional login system and understand authentication flow.

### Topics

- Controlled components (forms)
- `onChange` and `onSubmit`
- Form validation
- API requests (`fetch` or `axios`)
- Storing authentication tokens (`localStorage`)

### Resources

- React Forms: https://react.dev/learn/sharing-state-between-components
- Login/Auth Tutorial: https://www.freecodecamp.org/news/react-login-and-authentication/

### Milestones

- Build a login page (email + password)
- Add validation and error messages
- Send login request to API
- Store token after successful login

---

## Week 4 — API Integration + Data Display

### Goal

Connect your frontend to your REST API and display data.

### Topics

- `useEffect`
- Fetching data from APIs
- Authorization headers (Bearer token)
- Loading and error states
- Rendering lists

### Resources

- React Effects: https://react.dev/learn/synchronizing-with-effects
- Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

### Milestones

- Make authenticated API requests
- Fetch protected data from your API
- Display data in a list or table
- Handle loading and error states

---

## Week 5 — Routing + Final Integration

### Goal

Complete your frontend and fully integrate it with your API.

### Topics

- React Router
- Protected routes
- App structure
- Persisting login state

### Resources

- React Router: https://reactrouter.com/en/main/start/tutorial
- Protected Routes Guide: https://www.robinwieruch.de/react-router-private-routes/

### Milestones

- Add navigation (Login → Dashboard)
- Protect routes for authenticated users only
- Keep users logged in after refresh
- Fully connect frontend to your REST API
- Final UI improvements and cleanup

---

## Final Outcome

By the end of Week 5, you will have:

- A React frontend application
- A working login system
- Authenticated API requests
- A dashboard displaying data from your REST API

This project will serve as a strong foundation for future frontend development and portfolio work.
