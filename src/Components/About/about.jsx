import React from 'react';
import './about.css';

export default function About() {
  
  const aboutSummary = `Recent graduate from the Lighthouse Labs Flex-Web development Program with a consulting background in mergers and acquisition.`;

  return(
    <div id="about">
      <div className='header'>
        <img src="images/JW_DP.png" alt="Jevaughn Williams"/>
        <div className='name'>
          <h2>Jevaughn Williams</h2>
          <h4>Full-Stack Web Developer</h4>
        </div>
      </div>
      <h2 className="section-header">About</h2>
      <div className='summary'>
        {aboutSummary}
      </div>
    </div>
  )
}