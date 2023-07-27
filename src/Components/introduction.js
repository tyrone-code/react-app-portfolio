import profilePicture from '../images/portfolio-profile-picture.jpg'
import React from 'react';


export default function AboutMe() {
    return (
        <div>
        <div class="flex-container">
        <div><img src={profilePicture}/></div>
        <div>
          <h1>Hi i'm Tyrone Schoeman</h1>
          <p>I'm a 3rd year Computer Engineering student at The University of Waterloo who is looking to create and be a part of tomorrows future. I am a passionate and energetic person with a love for learning new things and meeting new people.</p>
      
      <p>Some of my interests include playing tennis, trying new recipes from Mastering The Art of French Cooking, Photoshopping myself into surreal scenes, renaissance artwork, and literature of all kinds.</p>
      
      <p>I created this website as a way to promote some of the projects and experiences that I've been fortunate enough to be apart of. I am actively looking for new opportunities and acquaintances, please contact me!</p>
      </div>
      </div>
      </div>
    )
  }