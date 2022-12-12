import { useState, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import './App.css'

function App () {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="text-center">
        { useRoutes(routes) }
      </div>
    </Suspense>
  )
}

export default App
