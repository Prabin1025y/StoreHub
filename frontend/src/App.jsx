import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      < Home />

    </>
  )
}

export default App
