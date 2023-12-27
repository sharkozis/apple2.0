// import React from 'react'
import './ProductDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ProductDetails() {
  const {id} = useParams()
  const [data,setData] = useState([])
  // console.log(myId);
  useEffect(()=>{
    (async()=>{
      const data = await fetch('/Utils/fakeDb.JSON')
      const res = await data.json()
      setData(res)
      
    })()
  },[])
  const newData = data.find(item=> (item._id == id))
  console.log(newData);
  return (
    <>
     { 
        <div className='details'>
          <h1>{newData?.name}</h1>
          <h2  className='gradient-text'>Supercharged by</h2>
          <div className='details-flex-div'>
            <div className='details-img-div'>
              <img src ={newData?.picture} />
              <h4>Starts at {newData?.price}</h4>
              <button className='product-btn'>Buy</button>
            </div>
            <div className='details-p-div'>
            <p>{newData?.about}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProductDetails