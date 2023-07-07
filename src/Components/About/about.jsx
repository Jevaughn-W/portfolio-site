import React from 'react';
import './about.css';

export default function About() {
  
 
  return(
    <div id="about">
      <div className='header'>
       <h2>Hi I'm Jevaughn, Welcome</h2>
      </div>
      <article className='summary'>
        <div className='about-container'>
          <img src="images/portfolio-img-placeholder.jpeg" alt="Jevaughn Williams"/>
          <p>I am a Full-Stack Web Developer recently graduated from the Lighthouse Labs Web Development bootcamp. I enjoy building web apps that solves real world problems and crave opportunities to continue growing as a web developer. <br/> <br/>Prior to diving into the world of web development, I completed a Bsc. in Actuarial Science and worked as a consultant in PwC’s Value Creation practice. During my years as a consultant I have worked on numerous transactions where I have honed my ability to work on high pressure, time sensitive projects as well as developed strong communication skills.</p>
        </div>
      </article>
    </div>
  )
}