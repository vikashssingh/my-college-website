import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/images/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero container">
        <div className="hero-text">
            <h1>We Ensure better education for a better world in country </h1>
            <p>our cuttig edge circulam in designed to empower with the knowledge skills and exprience needed to excel in the dynamic field of education</p>
            <button className='btn'>Exlpre More <img src={dark_arrow} alt ="" className =""/></button>
        </div>
      
    </div>
  )
}

export default Hero
