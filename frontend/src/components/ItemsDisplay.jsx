import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import ItemCard from './ItemCard';

const ItemsDisplay = ({ currentCategory }) => {

    const { storeItems } = useContext(StoreContext);
    return (
        <div className='mx-52'>
            <h2 className='font-roboto text-3xl my-3 font-medium text-rose-950'>Popular Items</h2>
            <div className='grid grid-cols-4 gap-5 font-roboto'>
                {storeItems.map((item, index) => {
                    return <ItemCard key={Date.now + index} name={item.name} description={item.description} image={item.image} price={item.price} />
                })}
            </div>
        </div>
    )
}

export default ItemsDisplay