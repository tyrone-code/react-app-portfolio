import profilePicture from '../images/portfolio-profile-picture.jpg'
import githublink from '../images/github-link.png'
import React from 'react';


export default function AboutMe() {
    return (
        <div>
        <div className="flex-container">
        <div><img src={profilePicture} alt="profile-picture"/></div>
          <div className="socials-container">
          <ul className='socials'>
          <li><a href='https://github.com/tyrone-code'><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/tyrone-schoeman-821633163"><i class="fa fa-linkedin-square"></i></a></li>
                <li><a href="mailto:tyronessglaw@gmail.com"><i class="fa fa-envelope-square"></i></a></li>
          </ul>
          </div>
        <div className="about-me" id="about">
          <h1>Hi i'm Tyrone Schoeman</h1>
          <p>I am a self-taught front-end web developer based in Krugersorp Gauteng. I formally worked as a paralegal before switching careers to front web development. My goal is looking to become fullstack developer and then eventually specialize in backend development.</p>
      
<p>I have created three projects with foundational fundamental html, css and javascript which you can see at the project section. The current portfolio website you are currently viewing is made with react library.</p>      
<p>During my free time, I enjoy gaming and watching sports,  Additionally, I love camping and have a deep appreciation for nature, often finding joy in hiking through its scenic beauty.</p>
<p>This website was crafted with the purpose of showcasing the projects and experiences I've been fortunate to be a part of. Currently, I am actively seeking new opportunities and connections, so please feel free to get in touch with me!</p>
      </div>
      </div>
      </div>
    )
  }