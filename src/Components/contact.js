import React from 'react';
import phone from '../images/icons8-phone-100.png'
import email from '../images/icons8-envelope-100.png'
import linkedin from '../images/icons8-linkedin-100.png'
export default function Contact(){
    return (
       <div>
        <h2 className="my-contact-heading">Contact me</h2>
        <p className="dont-hesitate" id="contact">If you would like to get in contact with me please don't hesistate.</p>
        <div className="contact-container">
      <div className="flex-container-contact">
  <div>
    <img src={phone} alt='phone' className="phone"/>
   <a href="tel:+27649048321"> <p className="text">064 904 8321</p></a>
  </div>
  <div><img src={email} alt='email' className="email"/>
  <a href="mailto:tyronessglaw@gmail.com"><p className="text-2">tyronessglaw@gmail.com</p></a>
  </div>
 
  <div><img src={linkedin} alt='linkedin' className="linkedIn"/>
 <a href="https://www.linkedin.com/in/tyrone-schoeman-821633163"> <p className="text">Tyrone Schoeman</p></a>

  </div>
  </div>






       </div>
       </div>
    )
  }



