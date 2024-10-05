import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { SVG } from '../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import { toast } from "react-toastify";

const Navbar = ({ setShowLoginForm }) => {

    const { token, setToken } = useContext(StoreContext);
    const [activePage, setactivePage] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token");
        setToken("");
        toast.success("Logged Out.");
        navigate("/");
    }

    return (
        <div className='flex w-screen justify-between py-12 px-3 sm:px-10 lg:px-32 2xl:px-52 sticky top-0 bg-white z-10'>
            <Link to="/">
                <div className='flex relative cursor-pointer'>
                    {/* <img className='h-8 drop-shadow-[0_1px_1px_white]' src="images/logo1.png" alt="logo" /> */}
                    {/* <img className='h-8 scale-110 drop-shadow-[0_1px_1px_white]' src="images/logo2.png" alt="logo" /> */}
                    <h3 className='text-2xl md:text-3xl font-bold font-boogaloo tracking-wide text-red-500'>StoreHUB</h3>
                    <div className='bg-rose-500 size-[6px] rounded-full absolute -right-[8px] bottom-1'></div>
                </div>
            </Link>
            <div className='hidden sm:block'>
                <ul className='flex text-rose-950 gap-3 md:gap-6'>
                    <Link to="/" onClick={() => setactivePage("home")} className={`${activePage == "home" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>Home</Link>
                    <a href='#shop' onClick={() => setactivePage("shop")} className={`${activePage == "shop" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>Shop</a>
                    <a href='#app' onClick={() => setactivePage("app")} className={`${activePage == "app" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>App</a>
                    <a href='#contact' onClick={() => setactivePage("contact")} className={`${activePage == "contact" ? "border-b-2 border-yellow-500" : ""} cursor-pointer hover:text-rose-400 text-md font-poppin`}>Contact</a>
                </ul>
            </div>
            <div className='flex items-center mx-3 md:mx-10 gap-5 relative'>
                <Link to="/cart"><img className='cursor-pointer size-5 md:size-9' src={SVG.cart} alt="cart" /></Link>
                <img className='cursor-pointer size-5 md:size-9' src={SVG.search} alt="search" />
                {getTotalCartAmount() !== 0 && <div className='size-1 md:size-2 animate-bounce bg-rose-500 rounded-full absolute top-2 md:top-0 left-4 md:left-8'></div>}

                {!token ?
                    <button className='text-xs text-nowrap md:text-md px-5 py-2 border-rose-900 border rounded-full text-rose-900 font-medium transition-all duration-300 hover:bg-rose-100' onClick={() => setShowLoginForm(true)}>Sing Up</button>
                    : <div className='relative group'>
                        <img className='size-8' src={SVG.profile} alt="profile" />
                        <div className='absolute group-hover:scale-100 bg-rose-50 px-4 border rounded-lg w-32 right-0 scale-0 transition'>
                            <ul>
                                <li onClick={Logout} className='cursor-pointer hover:text-rose-500 flex gap-3 my-3'><img src={SVG.logout} alt="log out" /> Log Out</li>
                                <hr className=' border-rose-200 border' />
                                <li className='cursor-pointer hover:text-rose-500 flex gap-3 my-3'><img src={SVG.order} alt="order" />Orders</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar