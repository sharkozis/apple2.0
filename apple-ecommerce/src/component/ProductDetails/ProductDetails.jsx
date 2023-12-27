// import React from 'react'
import './ProductDetails.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const {id} = useParams()
  const [data,setData] = useState([])
  
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
    <div className="details">
     {
      newData && (
        <h2>{newData.name}</h2>
      )
     }
    </div>
  )
}

export default ProductDetails