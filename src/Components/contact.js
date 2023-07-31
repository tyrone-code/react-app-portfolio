import React from 'react';
import phone from '../images/icons8-phone-100.png'
import email from '../images/icons8-envelope-100.png'
import linkedin from '../images/icons8-linkedin-100.png'
export default function Contact(){
    return (
       <div>
        <h2 className="my-contact-heading">Contact me</h2>
        <div className="contact-container">
      <div className="flex-container-contact">
  <div>
    <img src={phone} alt='phone' className="phone"/>
    <p className="text">082 651 8534</p>
  </div>
  <div><img src={email} alt='email'/>
  <p className="text">tyronessglaw@gmail.com</p>
  </div>
 
  <div><img src={linkedin} alt='linkedin' className="linkedIn"/>
  <p className="text">Tyrone Schoeman</p>

  </div>
  </div>






       </div>
       </div>
    )
  }



