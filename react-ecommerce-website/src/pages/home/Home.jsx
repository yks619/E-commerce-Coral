import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Product from './Product'
import Collection from './Collection'
import BestSeller from './BestSeller'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Product/>
      <Collection/>
      <BestSeller/>
    </div>
  )
}

export default Home