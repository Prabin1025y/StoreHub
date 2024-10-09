import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify"
import { images, svgs } from '../assets/assets';

const Orders = ({ url }) => {

  const [orderData, setOrderData] = useState([]);
  const [storeData, setStoreData] = useState({});


  const fetchStoreData = async () => {

    const response = await axios.get(url + "/api/product/list");


    if (!response.data.success) {
      toast.error(response.data.message);
    } else {
      const data = response.data.productData;

      const newStoreData = {};

      data?.forEach(element => {

        newStoreData[element._id] = {
          image: element.image,
          price: element.price,
          productName: element.productName
        };

      });
      setStoreData(newStoreData);
    }
  }

  const fetchOrderData = async () => {


    const response = await axios.get(url + "/api/order/admin/list");

    // console.log(response);


    if (!response.data.success) {
      toast.error(response.data.message);
    } else {
      setOrderData(response.data.orderItems);
    }

    await fetchStoreData();

  }

  useEffect(() => {
    fetchOrderData();
  }, [])

  const onApplyHandler = async (event, id) => {
    const statusValue = event.target.parentElement.previousElementSibling.firstElementChild.value;
    console.log(statusValue);

    const response = await axios.post(`${url}/api/order/admin/update`, { orderId: id, update: { status: statusValue } });

    if (response.data.success) {
      toast.success("Updated.");
    } else {
      toast.error(response.data.message);
    }

    fetchOrderData();
  }

  const onChangeHandler = async (event, id) => {

    const newData = orderData.map((item) => {
      if (item._id === id)
        item.status = event.target.value

      return item;
    })

    setOrderData(newData);


  }

  const showHideDetails = (event) => {
    console.log(event.target.parentElement.parentElement.nextElementSibling.classList);


    event.target.parentElement.parentElement.nextElementSibling.classList.toggle("hidden");

  }


  return (
    <div className='w-[80%] px-20'>
      {orderData.length === 0
        ?
        <h2 className=' my-2 text-rose-900 text-[12px] sm:text-sm md:text-lg font-bold'>You Havent Placed any Orders</h2>
        :
        <div className='my-10 font-roboto'>
          <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center my-2 text-rose-900 text-[12px] sm:text-sm md:text-lg'>
            <p className='font-bold'>Item</p>
            <p className='font-bold'>Name</p>
            <p className='font-bold'>Price</p>
            <p className='font-bold'>Quantity</p>
            <p className='font-bold'>Total</p>
            <p className='font-bold'>Status</p>
            <p className='font-bold'>Actions</p>
          </div>
          <hr className='h-[3px] bg-rose-300 ' />
        </div>
      }
      {
        orderData.map((eachOrder, index) => {

          return (
            <div key={`${Date.now() + "hello" + index}`}>
              <div className='text-[10px] sm:text-sm md:text-lg font-roboto grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center  my-2 text-rose-800'>
                <div className='flex flex-col'>
                  {
                    Object.keys(eachOrder.orderItems).map((key) => {
                      if (eachOrder.orderItems[key] == 0)
                        return;
                      return (
                        <img key={`${Date.now() + "world" + key}`} className='size-10 object-cover my-1' src={url + "/images/" + storeData[key]?.image} alt="hello" />
                      )
                    })
                  }
                </div>
                <div>
                  {
                    Object.keys(eachOrder.orderItems).map((key) => {
                      if (eachOrder.orderItems[key] == 0)
                        return;
                      return (
                        <p className='my-1' key={`${Date.now() + "world" + key}`}> {storeData[key]?.productName} </p>
                      )
                    })
                  }
                </div>
                <div className=''>
                  {
                    Object.keys(eachOrder.orderItems).map((key) => {
                      if (eachOrder.orderItems[key] == 0)
                        return;
                      return (
                        <p className='my-1' key={`${Date.now() + "world" + key}`}> Rs. {storeData[key]?.price} </p>
                      )
                    })
                  }
                </div>
                <div className=''>
                  {
                    Object.keys(eachOrder.orderItems).map((key) => {
                      if (eachOrder.orderItems[key] == 0)
                        return;
                      return (
                        <p className='my-1' key={`${Date.now() + "world" + key}`}> {eachOrder.orderItems[key]} </p>)
                    })
                  }
                </div>
                <div>Rs. {eachOrder.amount}</div>
                <div>
                  <select name="orderStatus" onChange={(event) => onChangeHandler(event, eachOrder._id)} value={eachOrder.status} >
                    <option value="order-processing">Order Processing</option>
                    <option value="payment-verified">Payment Verified</option>
                    <option value="delivery-in-process">Delivery In Process</option>
                    <option value="delivered">Delivered</option>
                    <option value="canceled">Canceled</option>
                  </select>
                </div>
                <div className='flex gap-2'>
                  <p onClick={(event) => onApplyHandler(event, eachOrder._id)} className='cursor-pointer text-white bg-green-500 px-2 py-1 rounded-full hover:scale-105 transition ' alt="image" >Apply</p>
                  <p onClick={showHideDetails} className='cursor-pointer text-white bg-blue-500 px-2 py-1 rounded-full hover:scale-105 transition' alt="image" >Info</p>
                </div>
              </div>
              <div className='flex transition hidden'>
                <div className='w-1/2 px-5 py-2 text-rose-800'>
                  <h2 className='font-bold text-xl underline'>Customer's Details:</h2>
                  <p><strong>Name:</strong> {`${eachOrder.address.fname} ${eachOrder.address.lname}`}</p>
                  <p><strong>Email:</strong> {eachOrder.address.email}</p>
                  <p><strong>Ph:</strong> {eachOrder.address.mobile}</p>
                  <p><strong>Address:</strong> {`${eachOrder.address.city}-${eachOrder.address.ward}, ${eachOrder.address.district}, ${eachOrder.address.province}, ${eachOrder.address.country} (${eachOrder.address.zip})`}</p>
                  <p><strong>Landmark:</strong> {eachOrder.address.landmark}</p>
                  <br />
                </div>
                <div className='px-5 py-2 text-rose-800'>
                  <h2 className='font-bold text-xl underline'>Payment details</h2>
                  <p><strong>method:</strong>{eachOrder.payment}</p>
                  {eachOrder.payment === "online-payment" &&
                    <>
                      <p><strong>registered number:</strong> {eachOrder["payment-details"]?.mobile}</p>
                      <p><strong>transaction Id:</strong> {eachOrder["payment-details"]?.["transaction-id"]}</p>
                      <img className='w-1/2' src={url + "/transaction/images/" + eachOrder["payment-details"]?.image} alt="image" />
                    </>
                  }
                </div>
              </div>
              <hr className='h-[2px] bg-rose-100 ' />
            </div>
          )
        })
      }
    </div >
  )
}

export default Orders