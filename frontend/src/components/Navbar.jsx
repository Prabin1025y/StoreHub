import React, { useState } from 'react'

const Navbar = () => {

    const [activePage, setactivePage] = useState("home");
    return (
        <div className='flex w-screen justify-between p-5 px-40 bg-rose-600'>
            <div className='flex cursor-pointer'>
                <img className='h-8 drop-shadow-[0_1px_1px_white]' src="images/logo1.png" alt="logo" />
                <img className='h-8 drop-shadow-[0_1px_1px_white]' src="images/logo2.png" alt="logo" />
            </div>
            <div>
                <ul className='flex text-white gap-6'>
                    <li onClick={() => setactivePage("home")} className={`${activePage == "home" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-lime-400 text-md font-poppin`}>Home</li>
                    <li onClick={() => setactivePage("shop")} className={`${activePage == "shop" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-lime-400 text-md font-poppin`}>Shop</li>
                    <li onClick={() => setactivePage("app")} className={`${activePage == "app" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-lime-400 text-md font-poppin`}>App</li>
                    <li onClick={() => setactivePage("contact")} className={`${activePage == "contact" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-lime-400 text-md font-poppin`}>Contact</li>
                </ul>
            </div>
            <div className='flex mx-10 gap-5'>
                <img className='cursor-pointer' src="svg/cart.svg" alt="cart" />
                <img className='cursor-pointer' src="svg/search.svg" alt="search" />
            </div>
        </div>
    )
}

export default Navbar