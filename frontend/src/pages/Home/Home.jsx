import React, { useState } from 'react'
import Header from '../../components/Header'
import ExploreCategories from '../../components/ExploreCategories'
import ItemsDisplay from '../../components/ItemsDisplay';
import AppDownload from '../../components/AppDownload';

const Home = () => {
  const [currentCategory, setcurrentCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreCategories currentCategory={currentCategory} setcurrentCategory={setcurrentCategory} />
      <hr className='h-1 mx-10 lg:mx-32 2xl:mx-52 mb-3 rounded-full bg-rose-200' />
      <ItemsDisplay currentCategory={currentCategory} />
      <AppDownload />
    </div>
  )
}

export default Home