// import React from 'react'
import './MainPage.css'
import myImg from '../img/cover.jpg'
function MainPage() {
  return (
    <div>
         <div className='main-container'>
            <div className='main-container-img'>
                <img className='myimg' src={myImg} alt="" />
            </div>
            <div className='main-container-details'>
            <h1>iPad</h1>
            <h2>Lovable. Drawable.<br />Magical.</h2>
            <p>From $449</p>
            <button className='product-btn'>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default MainPage