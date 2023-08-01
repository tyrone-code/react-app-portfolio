import React from 'react';
import ssgportfolio from '../images/ssg-portfolio-picture.png'
import heartsoulFoundation from '../images/heart-and-soul-foundation-project.png'
import rockpaperscissors from '../images/rock-paper-scissors-project.png'

export default function Projects(){
    return (
        <div>
       <h2 className="my-projects-heading" id="projects">My projects</h2>
        <div class="flex-container-projects">
          
        <div><a href="https://ssgattorneys.co.za" ><img src={ssgportfolio}alt="logos-html1"/></a> <p>Freelance project I did for attorney's</p></div>
        <div><a href="https://heartandsoulfoundation.org.za"><img src={heartsoulFoundation}alt="logos-html2"/></a> <p>Freelance project I did for a NPO (charity non-profit)</p></div>
        <div><a href= "https://tyrone-code.github.io/RockPaperScissors/"> <img src={rockpaperscissors}alt="logos-html3"/></a> <p>Personal project where I made rock paper scissors in a retro arcade style game</p></div>
      </div>
      </div>
    )
  }

