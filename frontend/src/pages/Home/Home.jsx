import React, { useState } from 'react'
import Header from '../../components/Header'
import ExploreCategories from '../../components/ExploreCategories'

const Home = () => {
  const [currentCategory, setcurrentCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreCategories currentCategory={currentCategory} setcurrentCategory={setcurrentCategory} />
    </div>
  )
}

export default Home