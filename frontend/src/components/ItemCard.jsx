import React, { useContext, useState } from 'react'
import { StoreContext } from '../Context/StoreContext';

const ItemCard = ({ _id, name, image, description, price }) => {


    const { cartItems, addCartItem, removeCartItems } = useContext(StoreContext);
    return (
        <div className='bg-white flex flex-col rounded-3xl pb-4 overflow-hidden drop-shadow-[2px_2px_2px_#d8d8d8]'>
            <div className='bg-white relative'>
                <img className='min-w-full min-h-[200px] max-h-[200px] object-cover ' src={image} alt="" />
                {!cartItems[_id]
                    ? <img onClick={() => addCartItem(_id)} className=' p-2 bottom-2 bg-lime-500 cursor-pointer rounded-full right-4 absolute' src="svg/add_black.svg" alt="add" />
                    : <div className='absolute flex gap-2 px-2 py-1 rounded-full right-4 bottom-2 bg-white'>
                        <img onClick={() => removeCartItems(_id)} className='cursor-pointer scale-90' src="svg/subtract_red.svg" alt="subtract" />
                        <p className='font-medium'>{cartItems[_id]}</p>
                        <img onClick={() => addCartItem(_id)} className='cursor-pointer scale-90' src="svg/add_green.svg" alt="add" />
                    </div>
                }
            </div>
            <div className='flex items-center px-6 py-3 text-2xl font-medium text-rose-950 justify-between'>
                <h3>{name}</h3>
                <img className='h-8' src="images/4star.png" alt="" />
            </div>
            <div className='flex flex-grow flex-col justify-between gap-1'>
                <p className='px-6 py-3 text-rose-900'>{description}</p>
                <h3 className='px-6 font-medium text-green-500 text-xl'>${price}</h3>
            </div>
        </div>
    )
}

export default ItemCard