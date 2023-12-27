// import React from 'react'
import myImg from '../img/about.jpg'
import './About.css'
function About() {
  return (
    <div className='about'>
     <div className='about-container-l'>
      <h2>Why iPad</h2>
      <p>iPad works with the powerful apps you are familiar with, like Adobe Photoshop or Microsoft Office, with the added ease of using them with touch.</p>
      <img src={myImg} alt="" />
     </div>
     <div className='about-container-r'>
      <h2>All-day battery life.</h2>
      <h1>Stay productive and on the go all day.</h1>
     </div>
    </div>
  )
}

export default About