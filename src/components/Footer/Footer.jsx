import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className ="footer">
        <p>@ 2024 MRSPTU All rights reserved.</p>
       
        
       
        <ul>
            <li>
            <a href="https://www.facebook.com/vikashkumar.chouhan.73" target="_blank" >
          <FaFacebook />
        </a> </li>
        <li>
            <a href="https://www.instagram.com/its_vkumar_vs/3" target="_blank" >
          <FaInstagram />
        </a> </li>
            
        <li>
            <a href="https://www.linkedin.com/in/im-vikashkumar/" target="_blank" >
          <FaLinkedin  />
        </a> </li>
            <li>Vikash Singh</li>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
      
    </div>
  )
}

export default Footer
