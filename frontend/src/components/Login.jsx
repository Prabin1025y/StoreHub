import React, { useState } from 'react'
import { SVG } from '../assets/assets'

const Login = ({ setShowLoginForm }) => {

    const [loginState, setLoginState] = useState("signup")
    return (
        <div className='bg-[#000000bf] absolute size-full z-20 flex justify-center items-center'>
            <form className='h-fit w-1/4 min-w-fit bg-white flex flex-col p-10 rounded-xl relative gap-5'>
                <h1 className='font-roboto text-xl text-rose-900 text-center font-bold'>{loginState === "login" ? "Log In" : "Create An Account"}</h1>
                {loginState === "signup" && <input className='outline-none border border-rose-900 rounded-md p-2 w-full' type="text" placeholder='Full Name' required />}
                <input className='outline-none border border-rose-900 rounded-md p-2 w-full' type="email" placeholder='Email Address' required />
                <input className='outline-none border border-rose-900 rounded-md p-2 w-full' type="password" placeholder='Password' required />
                <button className='bg-rose-900 text-white p-2  font-roboto rounded-md'>{loginState === "login" ? "LogIn" : "Create Account"}</button>
                {loginState === "signup" &&
                    <div className='flex gap-3'>
                        <input type="checkbox" required />
                        <p>I accept to your terms and conditions.</p>
                    </div>
                }
                {loginState === "login"
                    ? <p>Don't have an account yet? <span onClick={() => setLoginState("signup")} className='cursor-pointer text-rose-500 hover:underline'>create an acount here</span></p>
                    : <p>Already have an account? <span onClick={() => setLoginState("login")} className='cursor-pointer text-rose-500 hover:underline'>Login here</span></p>
                }
                <img className='absolute h-6  top-3 right-3 cursor-pointer rotate-45' onClick={() => setShowLoginForm(false)} src={SVG.add_black} alt="" />
            </form>
        </div>
    )
}

export default Login