import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<p>Loading...</p>}>
      { useRoutes(routes) }
    </Suspense>
  )
}

export default App
