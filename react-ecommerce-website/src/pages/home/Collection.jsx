import React from 'react'
import background from "../../../public/image/BackGround.png"

const Collection = () => {
  return (
    <div className=' bg-[url("image/BackGround.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>

      <div className='h-[580px] flex justify-between md:flex-row items-center'>
        <div className='md:w-1/2'></div>
          <div className='md:w-1/2'>
          <img src="/image/zara.png" alt="" />
          <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.</p>
<button className='px-6 py-2 bg-white text-black rounded-sm font font-semibold '>See Collection</button>
          </div>

      </div>
    </div>
  )
}

export default Collection