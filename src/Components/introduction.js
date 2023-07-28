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
          <li><a href='#'><i className="fa fa-github"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
          </ul>
          </div>
        <div className="about-me">
          <h1>Hi i'm Tyrone Schoeman</h1>
          <p>Lo ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
<p>em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>      
<p>labore et dis no aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia des</p>
      </div>
      </div>
      </div>
    )
  }