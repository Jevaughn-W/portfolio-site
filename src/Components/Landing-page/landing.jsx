import React from 'react';
import './landing.css';


export default function Landing() {
  return (
    <div id="landing-page">
      <h2>Jevaughn Williams</h2>
      <h3>Full-Stack Web Developer</h3>
      <h3>Scroll to explore</h3>
      <div className='down-arrow'>
        <img src='images/down.png' width='50px' height='50px' className='animated-image' key={1} alt='down'/>
        <img src='images/down.png' width='50px' height='50px' className='animated-image' key={2} alt='down'/>
        <img src='images/down.png' width='50px' height='50px' className='animated-image' key={3} alt='down'/>
      </div>

    </div>
  )
}