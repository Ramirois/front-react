import { useState } from 'react'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
  
      </div>
    </div>
  )
}


