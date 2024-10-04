import React from 'react';
import { images, svgs } from '../assets/assets';

const Navbar = () => {
  return (
    <div className='flex justify-between px-20 py-5'>
        <img className='w-52'  src={images.logo} alt="logo" />
        <img className='size-10' src={svgs.profile} alt="profile" />
    </div>
  )
}

export default Navbar