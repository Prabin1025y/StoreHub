import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
