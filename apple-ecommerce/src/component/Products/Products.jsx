// import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './Products.css'
import Product from '../Product/Product'
// import { useEffect } from 'react';


function Products() {
  const data = useLoaderData()
  // console.log(data);
  
  return (
    <div className='products-section'>
      <h2>Which iPad is right for you?</h2>
      <div className="products-container">
        {
          data.map(product => <Product
          key={product.id}
          product={product}
          ></Product>)
        }
      </div>
    </div>
  )
}

export default Products