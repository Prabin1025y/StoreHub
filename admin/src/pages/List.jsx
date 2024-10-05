import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { svgs } from '../assets/assets';

const List = ({ url }) => {

  const [products, setproducts] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(`${url}/api/product/list`);

    if (response.data.success) {
      setproducts(response.data.productData);

    }
    else
      toast.error("Error While LoadiFetchingng Data");
  }

  const removeItem = async(productId)=>{
    const response = await axios.post(`${url}/api/product/remove`,{"id":productId});

    if(response.data.success){
      fetchData();
      toast.success(response.data.message);
    }else{
      toast.error("Error while deleting data!");
    }
      
  }

  useEffect(() => {
    fetchData();

  }, [])


  return (
    <div className='p-5 flex flex-col items-center w-[80%]'>
      <p className='p-3 text-2xl'>All Items available in the store:</p>
      <div className='grid grid-cols-5'>
        <p className=' py-2 my-2 border border-orange-900 bg-orange-300 font-bold w-48 text-center'>image</p>
        <p className=' py-2 my-2 border border-orange-900 bg-orange-300 font-bold w-48 text-center'>product Name</p>
        <p className=' py-2 my-2 border border-orange-900 bg-orange-300 font-bold w-48 text-center'>price</p>
        <p className=' py-2 my-2 border border-orange-900 bg-orange-300 font-bold w-48 text-center'>description</p>
        <p className=' py-2 my-2 border border-orange-900 bg-orange-300 font-bold w-48 text-center'>Action</p>
      </div>

      {products &&
        products.map((item, index) => {
          return (
            <div key={Date.now() + index} className='grid grid-cols-5'>
              <div className='flex items-center justify-center  border-b-2 py-1 border-b-orange-900 w-48 h-30' >
                <img src={`${url}/images/${item.image}`} alt="item Image" className='h-28'/>
              </div>
              <p className='flex items-center justify-center  border-b-2 py-1 border-b-orange-900  w-48 text-center'>{item.productName}</p>
              <p className='flex items-center justify-center  border-b-2 py-1 border-b-orange-900  w-48 text-center'>${item.price}</p>
              <p className='flex items-center justify-center  border-b-2 py-1 border-b-orange-900  w-48 text-center'>{item.description}</p>
              <div className='flex items-center justify-center  border-b-2 py-1 border-b-orange-900 w-48 h-30' >
                <img onClick={()=>removeItem(item._id)} src={svgs.deleteIcon} alt="delete" className='flex items-center justify-center h-6 cursor-pointer' />
              </div>
            </div>
          )
        }
        )
      }


    </div>
  )
}

export default List