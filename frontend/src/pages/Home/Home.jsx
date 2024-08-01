import React, { useState } from 'react'
import Header from '../../components/Header'
import ExploreCategories from '../../components/ExploreCategories'
import ItemsDisplay from '../../components/ItemsDisplay';

const Home = () => {
  const [currentCategory, setcurrentCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreCategories currentCategory={currentCategory} setcurrentCategory={setcurrentCategory} />
      <hr className='h-1 mx-52 mb-3 rounded-full bg-rose-200' />
      <ItemsDisplay currentCategory={currentCategory}/>
    </div>
  )
}

export default Home