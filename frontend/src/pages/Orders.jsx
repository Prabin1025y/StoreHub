import React, { useContext, useEffect, useState } from 'react'
import { Images, SVG } from '../assets/assets'
import axios from 'axios';
import { StoreContext } from '../Context/StoreContext';
import { toast } from 'react-toastify';

const Orders = () => {

    const [orderData, setOrderData] = useState([]);
    const [storeItemData, setStoreItemData] = useState({});
    const { url, token, storeItems } = useContext(StoreContext);

    const fetchOrderData = async () => {

        if (!token)
            return;

        console.log(token);
        const response = await axios.post(url + "/api/order/list", {}, { headers: { token } });

        if (!response.data.success) {
            toast.error(response.data.message);
        } else {
            setOrderData(response.data.orderItems);
        }

        storeItems.forEach(element => {
            setStoreItemData((prev) => ({
                ...prev, [element._id]: {
                    ...prev[element._id],
                    image: element.image,
                    price: element.price,
                    productName: element.productName
                }
            }))
        });

    }

    const deleteOrder = async (event) => {

        const response = await axios.post(url + "/api/order/delete", { orderId: event.target.id }, { headers: { token } });

        if (response.data.success) {
            fetchOrderData();
            toast.success("Order Cnaceled");
        } else {
            toast.error(response.data.message);
        }

    }

    useEffect(() => {
        fetchOrderData();
    }, [token])

    useEffect(() => {

    }, [orderData])




    return (
        <div className='min-h-[40vh]'>
            {orderData.length === 0
                ?
                <h2 className='mx-10 lg:mx-32 2xl:mx-52 my-2 text-rose-900 text-[12px] sm:text-sm md:text-lg font-bold'>You Havent Placed any Orders</h2>
                :
                <div className='my-10 font-roboto'>
                    <div className='grid grid-cols-[1fr_1.5fr_1fr_0.5fr_1fr_1.5fr_1fr] items-center mx-10 lg:mx-32 2xl:mx-52 my-2 text-rose-900 text-[12px] sm:text-sm md:text-lg'>
                        <p className='font-bold'>Item</p>
                        <p className='font-bold'>Name</p>
                        <p className='font-bold'>Price</p>
                        <p className='font-bold'>Quantity</p>
                        <p className='font-bold'>Total</p>
                        <p className='font-bold'>Status</p>
                        <p className='font-bold'>Actions</p>
                    </div>
                    <hr className='h-[3px] bg-rose-300 mx-10 lg:mx-32 2xl:mx-52' />
                </div>
            }
            {
                orderData.map((eachOrder, index) => {
                    return (
                        <div key={`${Date.now() + "hello" + index}`}>
                            <div className='text-[10px] sm:text-sm md:text-lg font-roboto grid grid-cols-[1fr_1.5fr_1fr_0.5fr_1fr_1.5fr_1fr] items-center mx-10 lg:mx-32 2xl:mx-52 my-2 text-rose-800'>
                                <div className='flex flex-col'>
                                    {
                                        Object.keys(eachOrder.orderItems).map((key) => {
                                            return (
                                                <img key={`${Date.now() + "world" + key}`} className='size-10 object-cover my-1' src={url + "/images/" + storeItemData[key].image} alt="hello" />
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    {
                                        Object.keys(eachOrder.orderItems).map((key) => {
                                            return (
                                                <p key={`${Date.now() + "world" + key}`}> {storeItemData[key].productName} </p>
                                            )
                                        })
                                    }
                                </div>
                                <div className=''>
                                    {
                                        Object.keys(eachOrder.orderItems).map((key) => {
                                            return (
                                                <p key={`${Date.now() + "world" + key}`}> {storeItemData[key].price} </p>
                                            )
                                        })
                                    }
                                </div>
                                <div className=''>
                                    {
                                        Object.keys(eachOrder.orderItems).map((key) => {
                                            return (
                                                <p key={`${Date.now() + "world" + key}`}> {eachOrder.orderItems[key]} </p>)
                                        })
                                    }
                                </div>
                                <div>{eachOrder.amount}</div>
                                <div className=''>{eachOrder.status}</div>
                                <div className='flex gap-2'>
                                    <img onClick={deleteOrder} id={eachOrder._id} src={SVG.cancel} className='cursor-pointer' alt="image" />
                                </div>
                            </div>
                            <hr className='h-[2px] bg-rose-100 mx-10 lg:mx-32 2xl:mx-52' />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Orders