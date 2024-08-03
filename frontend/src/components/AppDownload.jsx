import React from 'react'

const AppDownload = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-5 m-10 font-roboto'>
      <p className='text-lg md:text-4xl' >For Better Experience, Download Our App. <span className='text-rose-500 font-semibold cursor-pointer hover:underline'>StoreHUB</span> </p>
      <div className='flex gap-10'>
        <img className='h-8 sm:h-16 hover:scale-105 cursor-pointer transition-all duration-300' src="images/playstore.png" alt="playstore" />
        <img className='h-8 sm:h-16 hover:scale-105 cursor-pointer transition-all duration-300' src="images/appstore.png" alt="appstore" />
      </div>
    </div>
  )
}

export default AppDownload