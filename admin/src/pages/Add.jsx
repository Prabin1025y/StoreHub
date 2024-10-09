import React, { useState } from 'react'
import { svgs } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {

  const url = "http://localhost:3000";
  const [image, setImage] = useState(false);
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    category: "Veggies",
    price: 0
  })

  const OnChangeHandler = (event) => {
    setProductData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    })
  }

  const OnSubmitHandler = async(event)=>{
    event.preventDefault();
    
    
    let formData = new FormData();
    formData.append("productName", productData.productName);
    formData.append("price", Number(productData.price));
    formData.append("category", productData.category);
    formData.append("description", productData.description);
    formData.append("image", image);
    
    const response = await axios.post(`${url}/api/product/add`, formData);
    
    console.log(response);
    if(response.data.success){
        setProductData({
          productName: "",
          description: "",
          category: "Veggies",
          price: 0
        });
        setImage(false);

        toast.success(response.data.message);
    }else{
      toast.error(response.data.message);
    }

  }

  return (
    <div className='flex justify-center h-full w-[80%] my-20'>
      <form className='w-[90%] md:w-[50%]' onSubmit={OnSubmitHandler} >
        <div>
          {
            image ?
              <label htmlFor="image" className='flex justify-center'>
                <img src={URL.createObjectURL(image)} alt="image" className='h-56' />
              </label>
              :
              <label htmlFor="image" className='border border-gray-600 flex flex-col justify-center rounded-sm items-center h-56 w-full bg-gray-100'>
                <img className='size-16' src={image ? URL.createObjectURL(image) : svgs.upload} alt="upload" />
                <p>upload a photo</p>
              </label>
          }
          <input onChange={(event) => setImage(event.target.files[0])} type="file" id='image' accept='image/*' name='image' required hidden />
        </div>



        {/* <div className='border border-gray-600 flex justify-center rounded-sm items-center h-56 w-full bg-gray-100'>
          {
            image ?
              <label htmlFor="image">
                <img src={URL.createObjectURL(image)} alt="image" className='h-56' />
              </label>
              :
              <label htmlFor="image" className='flex flex-col items-center'>
                <img className='size-16' src={image ? URL.createObjectURL(image) : svgs.upload} alt="upload" />
                <p>upload a photo</p>
              </label>
          }
        <input onChange={(event) => setImage(event.target.files[0])} type="file" id='image' accept='image/*' name='image' required hidden />
        </div> */}

        <div className='flex flex-col my-5 gap-1'>
          <label htmlFor="productName" className='font-bold'> Product Name:</label>
          <input onChange={OnChangeHandler} value={productData.productName} type="text" name='productName' id='productName' required placeholder='eg:-keyboard' className='border border-black rounded-md px-4 py-2' />
        </div>
        <div className='flex flex-col my-5 gap-1'>
          <label htmlFor="description" className='font-bold'> Desccription:</label>
          <textarea onChange={OnChangeHandler} value={productData.description} name='description' id='description' rows={3} required placeholder='description of product...' className='border border-black rounded-md px-4 py-2' />
        </div>



        <div className='flex flex-col md:flex-row gap-5'>
          <div className='flex flex-col md:w-1/2 my-5 gap-1'>
            <label htmlFor="category" className='font-bold'> Category:</label>
            <select onChange={OnChangeHandler} value={productData.category} name="category" id="category" className='border required border-black rounded-md px-4 py-2'>
              <option value="Veggies">Veggies</option>
              <option value="Dairy">Dairy</option>
              <option value="Meat">Meat</option>
              <option value="Bakery">Bakery</option>
              <option value="Pantry Staples">Pantry Staples</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Baby">Baby</option>
              <option value="Kitchen">Kitchen</option>
            </select>
          </div>
          <div className='flex flex-col md:w-1/2 my-5 gap-1'>
            <label htmlFor="price" className='font-bold'> Price:</label>
            <input onChange={OnChangeHandler} value={productData.price} type="number" min={0} name='price' id='price' placeholder='eg:-50' required className='border border-black rounded-md px-4 py-2' />
          </div>
          <div></div>
        </div>
        <button type='submit' className='w-full md:w-1/5 rounded-sm bg-black text-white px-4 py-2 font-bold hover:scale-105 transition duration-300' >Add</button>


      </form>
    </div>
  )
}

export default Add