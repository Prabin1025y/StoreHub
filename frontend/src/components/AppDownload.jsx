import React from 'react'
import { Images } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='app' className='flex justify-center items-center flex-col gap-5 m-10 font-roboto'>
      <p className='text-lg md:text-4xl' >For Better Experience, Download Our App. <span className='text-rose-500 font-semibold cursor-pointer hover:underline'>StoreHUB</span> </p>
      <div className='flex gap-10'>
        <img className='h-8 sm:h-16 hover:scale-105 cursor-pointer transition-all duration-300' src={Images.play_store} alt="playstore" />
        <img className='h-8 sm:h-16 hover:scale-105 cursor-pointer transition-all duration-300' src={Images.app_store} alt="appstore" />
      </div>
    </div>
  )
}

export default AppDownload