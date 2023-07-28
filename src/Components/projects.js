import React from 'react';
import ssgportfolio from '../images/ssg-portfolio-picture.png'

export default function projects(){
    return (
        <div>
       <h2 className="my-projects-heading">My projects</h2>
        <div class="flex-container-projects">
          
        <div><img src={ssgportfolio}alt="logos-html"/></div>
        <div><img src={ssgportfolio}alt="logos-html"/></div>
        <div><img src={ssgportfolio}alt="logos-html"/></div>
      </div>
      </div>
    )
  }