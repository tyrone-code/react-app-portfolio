



import React from 'react';
import Html from '../images/html-icon.png'
import CSS from '../images/css-icon.png'
import JS from '../images/javascript-icon.png'
import Git from '../images/git-icon.png'
import ReactLogo from '../images/react-icon.png'
export default function Myskills() {
    return (
        <div>
        <h2 className="my-skills-heading" id="skills">My Skills</h2>
    <div className="flex-container-skills">
    <div><img src={Html}alt="logos-html"/></div>
    <div><img src={CSS}alt="logos-css"/></div>
    <div><img src={JS}alt="logos-js"/></div>  
    <div><img src={Git} class="git-logo"alt="logos-git"/></div>
    <div><img src={ReactLogo}alt="logos-react"/></div>  
    </div>

        </div>

    )
  }