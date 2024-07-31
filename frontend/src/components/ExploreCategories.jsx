import React from 'react'
import { categories } from '../assets/categories'

const ExploreCategories = () => {
    return (
        <div className='mx-40'>
            <h3 className='text-4xl font-bold font-poppin my-2'>Explore Our Product Categories</h3>
            <p className='w-1/2 font-poppin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid in deserunt cum odit aut dolore officiis ex alias saepe, ducimus consectetur fugit voluptas ab tempora dicta cumque dolorem totam blanditiis!</p>
            <div className=' px-8 flex flex-nowrap gap-12 h-fit overflow-x-scroll my-8 scrollbar-none justify-start items-center'>
                {categories.map((category, index) => {
                    return (
                        <div key={Date.now() + index}>
                            <img className='min-w-[120px] aspect-square object-cover rounded-full' src={category.image} alt={category.name} />
                            <p className=' text-center font-poppin'>{category.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ExploreCategories