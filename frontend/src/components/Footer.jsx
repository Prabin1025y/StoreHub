import React from 'react'
import { SVG } from '../assets/assets'

const Footer = () => {
  return (
    <div id='contact' className='bg-gray-800'>
      <div className='flex flex-col md:flex-row gap-5 2xl:gap-20 py-10 px-10 lg:px-32 2xl:px-48 mt-20 font-roboto'>
        <div className='flex-[2]'>
          <h3 className='text-3xl font-bold font-boogaloo tracking-wide text-red-500'>StoreHUB.</h3>
          {/* <img className='h-8 scale-110 drop-shadow-[0_1px_1px_white]' src="images/logo2.png" alt="logo" /> */}
          <p className='2xl:w-2/3 text-white text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quo quod odit eos qui recusandae eius assumenda itaque, quae nemo expedita quam. Eveniet explicabo repudiandae doloribus minus recusandae animi in dolores nostrum, itaque veniam odio? Corporis id quisquam, voluptates aspernatur minus error consequatur quas dolorum reiciendis laudantium! Quis, magnam eligendi.</p>
        </div>
        <div className='flex-1 text-white'>
          <h3 className=' font-semibold text-2xl my-3'>Company</h3>
          <ul>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Delivery</li>
            <li className='cursor-pointer'>Address</li>
            <li className='cursor-pointer'>Privacy Policy</li>
            <li className='cursor-pointer'>About Us</li>
          </ul>
        </div>
        <div className='flex-1 text-white'>
          <h3 className=' font-semibold text-2xl my-3'>Contact Us</h3>
          <ul>
            <li className='cursor-pointer'>+977 9805043227</li>
            <li className='cursor-pointer'>contact@storehub.com</li>
          </ul>
          <div className='flex gap-5 mt-4'>
            <img className='cursor-pointer' src={SVG.facebook} alt="facebook" />
            <img className='cursor-pointer' src={SVG.instagram} alt="instagram" />
            <img className='cursor-pointer' src={SVG.x} alt="x" />
          </div>
        </div>
      </div>
      <hr className='mx-10 lg:mx-32 2xl:mx-48 my-2' />
      <p className='flex justify-center items-center text-white py-2'>copyright &#169; 2024 StoreHUB </p>
    </div>
  )
}

export default Footer