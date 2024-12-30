import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>by: júlio Elias</p>
      <h2>API funcionando normalmente</h2>
      <Users/>
    </>
  )
}

export default App
