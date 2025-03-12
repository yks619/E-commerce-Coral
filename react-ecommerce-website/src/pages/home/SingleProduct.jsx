import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const {id} = useParams()
  const [products, setProducts] = useState([])
  // console.log(id)
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p)=>p.id == id);
        console.log(product)
        setProducts(product[0])
        
      } catch (error) {
        console.log("Error fetching data", error)
      }
    }
    fetchData();
  }, [id])

  const {title,category, price,image,status} = products;
  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className='p-3 max-w-7xl m-auto'>
        <div className='mt-6 sm:mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
              <div>
                <img src={image} alt="" className='w-full'/>
              </div>
              <div>
                <h1 className='title text-left'>{title}</h1>
                <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit id veniam officiis ipsam repellat illo. Error facere repellendus recusandae sequi eveniet quia ut. Nostrum rem iure ea distinctio nisi?</p>
                <span className='my-2 text-xl text-yellow-600 flex items-center gap-1 sm:my-4'>
                  <FaStar/>
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct