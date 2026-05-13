import { useState } from 'react'

export default function App() {
  // useState is a React Hook that lets you add state to a functional component
  // It returns an array with two items:
  // 1. The current state value (count)
  // 2. A function to update that state (setCount)
  
  // Counter state: starts at 0
  const [count, setCount] = useState(0)
  
  // Text input state: starts as empty string
  const [text, setText] = useState('')
  
  // Function to increase counter
  const handleIncrement = () => {
    setCount(count + 1)
  }
  
  // Function to decrease counter
  const handleDecrement = () => {
    setCount(count - 1)
  }
  
  // Function to handle text input change
  // event.target.value gets the current text in the input field
  const handleTextChange = (event) => {
    setText(event.target.value)
  }
  
  return (
    <div className="container">
      <h1>React Beginner Tutorial</h1>
      
      {/* Counter Section */}
      <section className="card">
        <h2>Counter</h2>
        <p className="counter-display">{count}</p>
        
        <div className="button-group">
          {/* When button is clicked, handleDecrement function runs */}
          <button onClick={handleDecrement} className="btn btn-danger">
            Decrease
          </button>
          
          {/* When button is clicked, handleIncrement function runs */}
          <button onClick={handleIncrement} className="btn btn-success">
            Increase
          </button>
        </div>
        
        {/* Reset button - sets count back to 0 */}
        <button onClick={() => setCount(0)} className="btn btn-secondary">
          Reset
        </button>
      </section>
      
      {/* Text Input Section */}
      <section className="card">
        <h2>Text Input</h2>
        
        {/* Input field: onChange event fires when user types */}
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={handleTextChange}
          className="input-field"
        />
        
        {/* Display what the user typed */}
        {text ? (
          <p className="text-display">You typed: <strong>{text}</strong></p>
        ) : (
          <p className="text-display text-muted">Start typing above...</p>
        )}
        
        {/* Show character count */}
        <p className="char-count">Characters: {text.length}</p>
        
        {/* Clear button - sets text back to empty string */}
        <button onClick={() => setText('')} className="btn btn-secondary">
          Clear
        </button>
      </section>
      
      <footer>
        <p>💡 Each time you click a button, React updates the state and re-renders the component!</p>
      </footer>
    </div>
  )
}
