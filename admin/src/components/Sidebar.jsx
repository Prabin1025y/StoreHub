import React from 'react'
import { svgs } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[20%] border-orange-600 border-r h-[91vh] pt-20 flex flex-col items-end' >
      <NavLink to="/add" className='flex gap-4 text-xl items-center border border-orange-600 border-r-0 mb-20 p-1 md:p-5 rounded-tl-md rounded-bl-md w-[75%]'>
        <img className='size-8' src={svgs.add} alt="add" />
        <p className='hidden lg:block'>Add Food</p>
      </NavLink>
      <NavLink to="/list" className='flex gap-4 text-xl items-center border border-orange-600 border-r-0 mb-20 p-1 md:p-5 rounded-tl-md rounded-bl-md w-[75%]'>
        <img className='size-8' src={svgs.list} alt="add" />
        <p className='hidden lg:block'>List Food</p>
      </NavLink>
      <NavLink to="/orders" className='flex gap-4 text-xl items-center border border-orange-600 border-r-0 mb-20 p-1 md:p-5 rounded-tl-md rounded-bl-md w-[75%]'>
        <img className='size-8' src={svgs.order} alt="add" />
        <p className='hidden lg:block'>Orders</p>
      </NavLink>
    </div>
  )
}

export default Sidebar