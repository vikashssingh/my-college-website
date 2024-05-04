
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  //for video player
  const[playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title SubTitle='Our Program' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title SubTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title SubTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title SubTitle='Contact Us' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    
    </div>
  )
}

export default App
