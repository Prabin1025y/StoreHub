import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  let deliveryCharge;
  deliveryCharge = getTotalCartAmount() === 0 ? 0 : 2;
  return (
    <div className='flex mx-10 lg:mx-32 2xl:mx-52 gap-32'>
      <div className='w-1/2'>
      <h2 className='my-3 font-bold text-2xl text-rose-900'>Address Details</h2>
      <form className='flex flex-col items-center'>
  <div className='flex justify-between w-full max-w-2xl'>
    <input className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='First Name' required />
    <input className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Last Name' required />
  </div>
  <div className='w-full max-w-2xl'>
    <input className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-full text-rose-800' type="email" placeholder='Email Address' required />
  </div>
  <div className='w-full max-w-2xl'>
    <input className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-full text-rose-800' type="number" placeholder='Phone Number' required />
  </div>
  <div className='flex justify-between w-full max-w-2xl'>
    <input className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Country' required />
    <input className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Province' required />
  </div>
  <div className='flex justify-between w-full max-w-2xl'>
    <input className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='District' required />
    <input className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="number" placeholder='Zip Code' required />
  </div>
  <div className='flex justify-between w-full max-w-2xl'>
    <input className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='City/Village' required />
    <input className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Ward Number' required />
  </div>
  <div className='w-full max-w-2xl'>
    <input className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-full text-rose-800' type="text" placeholder='Nearest Landmark' required />
  </div>
</form>

      </div>
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
        <button onClick={() => navigate("/order")} className='font-medium relative left-1/2 -translate-x-1/2 my-5  p-2 rounded-md hover:scale-105 transition-all duration-300 bg-rose-800 text-white w-1/2'>Procees To Payment</button>
      </div>
    </div>
  )
}

export default PlaceOrder;