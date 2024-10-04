import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:3000";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr className='border-none h-[1px] bg-red-500' />
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/list' element={<List url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App