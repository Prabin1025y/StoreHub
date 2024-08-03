import React, { useState } from 'react'

const Navbar = () => {

    const [activePage, setactivePage] = useState("home");
    return (
        <div className='flex w-screen justify-between py-12 px-3 sm:px-10 lg:px-32 2xl:px-52'>
            <div className='flex relative cursor-pointer'>
                {/* <img className='h-8 drop-shadow-[0_1px_1px_white]' src="images/logo1.png" alt="logo" /> */}
                {/* <img className='h-8 scale-110 drop-shadow-[0_1px_1px_white]' src="images/logo2.png" alt="logo" /> */}
                <h3 className='text-2xl md:text-3xl font-bold font-boogaloo tracking-wide text-red-500'>StoreHUB</h3>
                <div className='bg-rose-500 size-[6px] rounded-full absolute -right-[8px] bottom-1'></div>
            </div>
            <div className='hidden sm:block'>
                <ul className='flex text-rose-950 gap-3 md:gap-6'>
                    <li onClick={() => setactivePage("home")} className={`${activePage == "home" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>Home</li>
                    <li onClick={() => setactivePage("shop")} className={`${activePage == "shop" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>Shop</li>
                    <li onClick={() => setactivePage("app")} className={`${activePage == "app" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>App</li>
                    <li onClick={() => setactivePage("contact")} className={`${activePage == "contact" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>Contact</li>
                </ul>
            </div>
            <div className='flex items-center mx-3 md:mx-10 gap-5 relative'>
                <img className='cursor-pointer size-5 md:size-9' src="svg/cart.svg" alt="cart" />
                <img className='cursor-pointer size-5 md:size-9' src="svg/search.svg" alt="search" />
                <div className='size-1 md:size-2 animate-bounce bg-rose-500 rounded-full absolute top-2 md:top-0 left-4 md:left-8'></div>
                <button className='text-xs text-nowrap md:text-md px-5 py-2 border-rose-900 border rounded-full text-rose-900 font-medium transition-all duration-300 hover:bg-rose-100'>Sing Up</button>
            </div>
        </div>
    )
}

export default Navbar