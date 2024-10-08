import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { SVG } from '../../assets/assets';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PlaceOrder = () => {




  const { getTotalCartAmount, cartItems, url, token, setCartItems } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("online-payment");

  const navigate = new useNavigate();

  let deliveryCharge = getTotalCartAmount() === 0 ? 0 : 2;
  // deliveryCharge =
  let codCharge = paymentMethod === "cash-on-delivery" ? 2 : 0;
  let totalAmount = getTotalCartAmount() + deliveryCharge + codCharge;

  const [image, setImage] = useState(false);

  const [paymentData, setPaymentData] = useState({
    "payment-platform": "eSewa",
    mobile: "",
    "transaction-id": "",
    image: image
  });


  const [addressData, setAddressData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    country: "",
    province: "",
    district: "",
    ward: "",
    city: "",
    zip: "",
    landmark: ""
  });


  const onAddressChangeHandler = (event) => {
    setAddressData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  const onPaymentDataChangeHandler = (event) => {
    setPaymentData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));


  }

  const onPaymentMethodChangeHandler = (event) => {
    // codCharge = paymentData === "cash-on-delivery" ? 0 : 2;
    setPaymentMethod(event.target.value);
    // setOrderData((prev)=>({...prev, amount: totalAmount}))
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("amount", totalAmount);
    formData.append("orderItems", JSON.stringify(cartItems));
    formData.append("address", JSON.stringify(addressData));
    formData.append("payment", paymentMethod);
    formData.append("payment-details", JSON.stringify(paymentData));

    if (image) {
      formData.append("image", image);
    }

    await axios.post(url + "/api/order/order", formData, { headers: { token }, "Content-Type": "multipart/form-data" });

    setCartItems({});
    toast.success("Order Placed Successfully");
    navigate("/");

  }




  return (
    <div className='flex mx-10 lg:mx-32 2xl:mx-52 gap-32'>
      <div className='w-full'>
        <form className='flex gap-10' onSubmit={onSubmitHandler}>
          <div className='flex flex-col w-1/2'>
            <h2 className='my-3 font-bold text-2xl text-rose-900'>Address Details</h2>
            <div className='flex justify-between w-full max-w-2xl'>
              <input onChange={onAddressChangeHandler} value={addressData.fname} name='fname' className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='First Name' required />
              <input onChange={onAddressChangeHandler} value={addressData.lname} name='lname' className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Last Name' required />
            </div>
            <div className='w-full max-w-2xl'>
              <input onChange={onAddressChangeHandler} value={addressData.email} name='email' className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-full text-rose-800' type="email" placeholder='Email Address' required />
            </div>
            <div className='w-full max-w-2xl'>
              <input onChange={onAddressChangeHandler} value={addressData.mobile} name='mobile' className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-full text-rose-800' type="number" placeholder='Phone Number' required />
            </div>
            <div className='flex justify-between w-full max-w-2xl'>
              <input onChange={onAddressChangeHandler} value={addressData.country} name='country' className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Country' required />
              <input onChange={onAddressChangeHandler} value={addressData.province} name='province' className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Province' required />
            </div>
            <div className='flex justify-between w-full max-w-2xl'>
              <input onChange={onAddressChangeHandler} value={addressData.district} name='district' className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='District' required />
              <input onChange={onAddressChangeHandler} value={addressData.zip} name='zip' className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="number" placeholder='Zip Code' required />
            </div>
            <div className='flex justify-between w-full max-w-2xl'>
              <input onChange={onAddressChangeHandler} value={addressData.city} name='city' className='mr-3 outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='City/Village' required />
              <input onChange={onAddressChangeHandler} value={addressData.ward} name='ward' className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-1/2 text-rose-800' type="text" placeholder='Ward Number' required />
            </div>
            <div className='w-full max-w-2xl'>
              <input name='landmark' onChange={onAddressChangeHandler} value={addressData.landmark} className='outline-none border border-rose-900 rounded-md px-3 py-1 my-3 w-full text-rose-800' type="text" placeholder='Nearest Landmark' required />
            </div>
          </div>
          <div className='md:w-1/2'>
            <div>
              <h2 className='my-3 font-bold text-2xl text-rose-900'>Payment Method</h2>
              <div className='my-1'>
                <label >
                  <input onClick={onPaymentMethodChangeHandler} defaultChecked className='peer' type="radio" name='transaction-method' value='online-payment' hidden />
                  <span className='px-4 py-2 rounded-md peer-checked:bg-rose-300'>
                    Online Payment
                  </span>
                </label>
                <label >
                  <input onClick={onPaymentMethodChangeHandler} className='peer' type="radio" name='transaction-method' value='cash-on-delivery' hidden />
                  <span className='rounded-md px-4 py-2 peer-checked:bg-rose-300'>Cash On Delivery</span>
                </label>
              </div>
              {paymentMethod === "online-payment" &&
                <div className='w-full h-fit border border-rose-300 bg-rose-50 rounded-md p-3'>
                  <label htmlFor="payment-platform">Payment Platform:</label>
                  <select onChange={onPaymentDataChangeHandler} value={paymentData['payment-platform']} name="payment-platform" id="payment-platform" className='outline-none w-full border rounded-md py-1'>
                    <option value="eSewa" defaultChecked>eSewa</option>
                    <option value="Khalti" defaultChecked>Khalti</option>
                  </select>
                  <div className='flex'>
                    <div className='flex flex-col w-1/2'>
                      <label htmlFor="mobile-number">Mobile Number:</label>
                      <input onChange={onPaymentDataChangeHandler} name='mobile' value={paymentData.mobile} placeholder='Registered in payment platform' className='outline-none w-[80%] border rounded-md py-1' type="number" min={9000000000} max={9999999999} required />
                    </div>
                    <div className='flex flex-col w-1/2'>
                      <label htmlFor="transactionI-id">Transaction Id:</label>
                      <input onChange={onPaymentDataChangeHandler} value={paymentData['transaction-id']} placeholder='Available in payment statement' className='outline-none w-full border rounded-md py-1' type="text" name='transaction-id' required />
                    </div>
                  </div>
                  <div>
                    Upload screenshot of payment:
                    {
                      image ?
                        <label htmlFor="image" className='flex justify-center'>
                          <img src={URL.createObjectURL(image)} alt="image" className='h-56' />
                        </label>
                        :
                        <label htmlFor="image" className='border border-gray-600 flex flex-col justify-center rounded-sm items-center h-56 w-full bg-gray-100'>
                          <img className='size-16' src={SVG.upload} alt="upload" />
                          <p>upload a photo</p>
                        </label>
                    }
                    <input onChange={(event) => setImage(event.target.files[0])} type="file" id='image' accept='image/*' name='image' required hidden />
                  </div>
                </div>
              }
            </div>
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
            {paymentMethod !== "online-payment" &&
              <>
                <div className=' my-2 text-rose-800 flex justify-between'>
                  <p>COD Charge</p>
                  <p className='font-medium'>${codCharge}</p>
                </div>
                <hr />
              </>
            }
            <div className=' my-2 text-rose-800 flex justify-between'>
              <p className='font-medium'>Total</p>
              <p className='font-medium'>${(totalAmount).toFixed(2)}</p>
            </div>
            <hr />
            <button type='submit' className='font-medium relative left-1/2 -translate-x-1/2 my-5  p-2 rounded-md hover:scale-105 transition-all duration-300 bg-rose-800 text-white w-1/2'>Place Order</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default PlaceOrder;