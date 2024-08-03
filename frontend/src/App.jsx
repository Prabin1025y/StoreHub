import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Footer from './components/Footer'
import Login from './components/Login'
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <>
      {showLoginForm && <Login setShowLoginForm={setShowLoginForm} />}
      <Navbar setShowLoginForm={setShowLoginForm} />
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
