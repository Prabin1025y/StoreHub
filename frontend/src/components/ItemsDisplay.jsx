import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import ItemCard from './ItemCard';

const ItemsDisplay = ({ currentCategory }) => {

    const { storeItems,url } = useContext(StoreContext);
    return (
        <div id='shop' className='mx-10 lg:mx-32 2xl:mx-52'>
            <h2 className='font-roboto text-3xl my-3 font-medium text-rose-950'>{currentCategory=="all"?"Popular Items":currentCategory}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 font-roboto'>
                {storeItems.map((item, index) => {
                    if (currentCategory === "all" || currentCategory === item.category)
                        return <ItemCard key={Date.now + index} _id={item._id} productName={item.productName} description={item.description} image={url+"/images/"+item.image} price={item.price} />
                })}
            </div>
        </div>
    )
}

export default ItemsDisplay