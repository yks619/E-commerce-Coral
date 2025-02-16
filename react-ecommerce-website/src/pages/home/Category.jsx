import React from 'react'
import {Link} from "react-router-dom"


const companyLogo = [
    {id: 1, img: "/image/Company/brand-1.png"},
    {id: 2, img: "/image/Company/brand-2.png"},
    {id: 3, img: "/image/Company/brand-3.png"},
    {id: 4, img: "/image/Company/brand-4.png"},
    {id: 5, img: "/image/Company/brand-5.png"},
]

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28 '>
        {/* brand logo */}
        <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
      {
        companyLogo.map(({id,img})=>(<div key={id}><img src={img} alt="" /></div>

        ))
      }
        </div>

{/* category grid */}
<div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
  <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>

  <div>
    <Link to="/"><img src="/image/category/18.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
  </div>
  <div className='md:w-1/2'>
  <div className='grid grid-cols-2 gap-2'>
  <Link to="/"><img src="/image/category/01.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
  <Link to="/"><img src="/image/category/02.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
  <Link to="/"><img src="/image/category/03.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
  <Link to="/"><img src="/image/category/20.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>

  </div>
  
  </div>
</div>

    </div>
  )
}

export default Category