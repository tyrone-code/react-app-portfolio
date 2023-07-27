import React from 'react';
import Html from '../images/html-icon.png'
import CSS from '../images/css-icon.png'
import JS from '../images/javascript-icon.png'
import Git from '../images/git-icon.png'
import ReactLogo from '../images/react-icon.png'
export default function mySkills() {
    return (
        <>
        <h2>My Skills</h2>
    <div class="flex-container-skills">
    <div><img src={Html}/></div>
    <div><img src={CSS}/></div>
    <div><img src={JS}/></div>  
    <div><img src={Git}/></div>
    <div><img src={ReactLogo}/></div>  
    </div>

        </>

    )
  }