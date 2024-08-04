import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { SVG } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { storeItems, cartItems, addCartItem, removeCartItems, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  let deliveryCharge;
  deliveryCharge = getTotalCartAmount() === 0 ? 0 : 2;
  return (<>
    {getTotalCartAmount() === 0
      ? <div className='text-3xl text-rose-900 font-roboto mx-10 lg:mx-32 2xl:mx-52 flex flex-col items-center'>
        <img src={SVG.empty_cart} alt="" />
        <p>Cart Is Empty.</p>
      </div>
      : <div className='my-10 font-roboto'>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center mx-10 lg:mx-32 2xl:mx-52 my-2 text-rose-900 text-[12px] sm:text-sm md:text-lg'>
          <p className='font-bold'>Item</p>
          <p className='font-bold'>Name</p>
          <p className='font-bold'>Price</p>
          <p className='font-bold'>Quantity</p>
          <p className='font-bold'>Total</p>
          <p className='font-bold'>Actions</p>
        </div>
        <hr className='h-[3px] bg-rose-300 mx-10 lg:mx-32 2xl:mx-52' />
      </div>}
    {
      storeItems.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (<div key={Date.now() + index}>
            <div className='text-[10px] sm:text-sm md:text-lg font-roboto grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center mx-10 lg:mx-32 2xl:mx-52 my-2 text-rose-800'>
              <img className='size-10 object-cover' src={item.image} alt={item.name} />
              <p className=''>{item.name}</p>
              <p className=''>${item.price}</p>
              <p className=''>{cartItems[item._id]}</p>
              <p className=''>${(item.price * cartItems[item._id]).toFixed(2)}</p>
              <div className='flex gap-2'>
                <img onClick={() => addCartItem(item._id)} className='size-3 sm:size-6 cursor-pointer' src={SVG.add_green_duo} alt="" />
                <img onClick={() => removeCartItems(item._id)} className='size-3 sm:size-6 cursor-pointer' src={SVG.subtract_red_duo} alt="" />
              </div>
            </div>
            <hr className='h-[2px] bg-rose-100 mx-10 lg:mx-32 2xl:mx-52' />
          </div>);
        }
      })
    }
    <div className=' font-roboto mx-10 lg:mx-32 2xl:mx-52 flex flex-col md:flex-row gap-10 my-10'>
      <div className='md:w-1/2'>
        <h2 className='my-3 font-bold text-2xl text-rose-900'>Cart Total</h2>
        <div className='my-2 text-rose-800 flex justify-between'>
          <p>Subtotal</p>
          <p className='font-medium'>${getTotalCartAmount().toFixed(2)}</p>
        </div>
        <hr />
        <div className=' my-2 text-rose-800 flex justify-between'>
          <p>Delivery Charge</p>
          <p className='font-medium'>${deliveryCharge}</p>
        </div>
        <hr />
        <div className=' my-2 text-rose-800 flex justify-between'>
          <p className='font-medium'>Total</p>
          <p className='font-medium'>${(getTotalCartAmount() + deliveryCharge).toFixed(2)}</p>
        </div>
        <hr />
        <button onClick={() => getTotalCartAmount() === 0 ? alert("The cart is empty") : navigate("/order")} className=' relative left-1/2 -translate-x-1/2 my-5  p-2 rounded-md hover:scale-105 transition-all duration-300 bg-rose-800 text-white w-1/2'>Checkout</button>
      </div>
      <div className='md:w-1/2 flex flex-col items-center gap-3'>
        <h2 className='my-3 font-bold text-2xl text-rose-900'>Promo Code</h2>
        <p className='text-rose-800'>If You have any promo code please fill it here.</p>
        <div className=' border border-rose-900 rounded-full overflow-hidden flex justify-between w-1/2 min-w-fit'>
          <input type="text" placeholder='promo code...' className='outline-none  py-1 px-3' />
          <button className='text-white bg-rose-800 h-full px-3 py-1'>Apply</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cart