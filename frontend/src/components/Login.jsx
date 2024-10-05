import React, { useContext, useState } from 'react'
import { SVG } from '../assets/assets'
import axios from 'axios';
import { StoreContext } from '../Context/StoreContext';
import { toast } from "react-toastify"


const Login = ({ setShowLoginForm }) => {

    const { url, setToken } = useContext(StoreContext);
    const [loginState, setLoginState] = useState("signup");
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const OnChangeHandler = (event) => {
        setUserData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const OnSubmitHandler = async (event) => {
        event.preventDefault();
        let newUrl = url;

        if (loginState === "login")
            newUrl += "/api/user/login";
        else
            newUrl += "/api/user/register";

        const response = await axios.post(newUrl, userData);

        if (response.data.success) {
            setToken(response.data.token);

            localStorage.setItem("token", response.data.token);
            setShowLoginForm(false);

            toast.success("Logged in successfully");
        } else {
            toast.error(response.data.message);
        }
    }

    return (
        <div className='bg-[#000000bf] fixed size-full z-20 flex justify-center items-center'>
            <form className='h-fit w-1/4 min-w-fit bg-white flex flex-col p-10 rounded-xl relative gap-5' onSubmit={OnSubmitHandler}>
                <h1 className='font-roboto text-xl text-rose-900 text-center font-bold'>{loginState === "login" ? "Log In" : "Create An Account"}</h1>
                {loginState === "signup" && <input className='outline-none border border-rose-900 rounded-md p-2 w-full' onChange={OnChangeHandler} name='username' value={userData.username} type="text" placeholder='Full Name' required />}
                <input className='outline-none border border-rose-900 rounded-md p-2 w-full' onChange={OnChangeHandler} name='email' value={userData.email} type="email" placeholder='Email Address' required />
                <input className='outline-none border border-rose-900 rounded-md p-2 w-full' onChange={OnChangeHandler} name='password' value={userData.password} type="password" placeholder='Password' required />
                <button className='bg-rose-900 text-white p-2  font-roboto rounded-md' type='submit'>{loginState === "login" ? "LogIn" : "Create Account"}</button>
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