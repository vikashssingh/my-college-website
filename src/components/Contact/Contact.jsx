import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7de3fde6-a046-494e-bb5a-71ef73bbfbe3");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res)=>res.json());
  
      
  
      if (res.success) {
        console.log(" Successfully",res);
        setResult(res.message);
        event.target.reset();
        
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };
  

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src ={msg_icon} alt =""/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat excepturi laudantium ipsum, quia similique obcaecati ab porro debitis dolorum, vel corrupti fugit magnam ipsa, cum molestias quas beatae? Voluptas deleniti aspernatur, deserunt odit nesciunt hic esse totam necessitatibus quasi! Nostrum quo adipisci corrupti consequuntur quam, incidunt est vitae nulla!</p>
            <ul>
                <li><img src={ mail_icon} alt="" />vikash@gmail.com</li>
                <li> <img src={ phone_icon} alt="" /> +91 9523056464</li>
                <li> <img src={ location_icon} alt="" /> Lorem ipsum dolor sit, amet consectetur<br/> adipisicing elit. Ea, ipsa.</li>
              
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type ="text" name="name" placeholder="Enter your name" required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile"required/>
                <label>Write your message here</label>
                <textarea name="message"  rows="6" placeholder="Enter your message" required></textarea>
                <button type='submit' className ='btn dark-btn'>Submit now <img src={ white_arrow} alt=""/></button>

            </form>
            <span>{result}</span>
            
        </div>
      
    </div>
  )
}

export default Contact
