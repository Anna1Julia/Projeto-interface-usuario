import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>TO THE LEFT TO DE LEFT</title>
      </head>
      <body>
          <main>
          <h1 id="contador">{count}</h1>
          <button onClick= {() => setCount((count) => count + 1)}>Incrementar</button>
          <button onClick= {() => setCount((count) => count - 1)}>Decrementar</button>
          </main>
      </body>
      </html>
    </>
  )
}

export default App
