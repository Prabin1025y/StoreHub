import React from 'react'
import { categories } from '../assets/storeData';

const ExploreCategories = ({ currentCategory, setcurrentCategory }) => {
    // const activeTailwindClass = ""
    return (
        <div className='mx-10 lg:mx-32 2xl:mx-52'>
            <h3 className='text-4xl font-medium font-roboto text-rose-950 mt-12 mb-6'>Explore Our Products</h3>
            <p className='md:w-1/2 font-roboto text-rose-950'> Skip the long lines and heavy lifting while enjoying the convenience of comparing prices and discovering new products from the comfort of your home.</p>
            <div className=' px-8 flex flex-nowrap gap-12 h-fit overflow-x-scroll py-8 scrollbar-none justify-start items-center'>
                {categories.map((category, index) => {
                    return (
                        <div onClick={() => setcurrentCategory(prev => prev === category.name ? "all" : category.name)} className='cursor-pointer' key={Date.now() + index}>
                            <img className={` min-w-[120px] aspect-square object-cover rounded-full drop-shadow-[4px_4px_7px_gray] ${currentCategory === category.name ? "ring-4 ring-rose-600 p-1" : ""}`} src={category.image} alt={category.name} />
                            <p className='pt-3 text-center font-roboto text-rose-950'>{category.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ExploreCategories