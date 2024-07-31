import React from 'react'

const Header = () => {
    return (
        <div className='bg-[url("images/headerBg.jpeg")]  bg-no-repeat bg-cover mx-40 my-4 h-[60vh] p-10 rounded-3xl'>
            <div className='w-2/3 h-full flex flex-col justify-end items-start gap-10 text-white font-'>
                <h2 className='text-[4rem] font-bold'>Shopping Made Simple. Fresh Groceries, Click and Delivered!</h2>
                <p className='text-lg font-medium'>grocery shopping brings fresh produce, pantry staples, and household essentials straight to your door with just a few clicks. Skip the long lines and heavy lifting while enjoying the convenience of comparing prices and discovering new products from the comfort of your home.</p>
                <button className='bg-white text-rose-600 px-6 py-3 rounded-full hover:bg-rose-100 transition duration-400'>Shop Now</button>
            </div>
        </div>
    )
}

export default Header