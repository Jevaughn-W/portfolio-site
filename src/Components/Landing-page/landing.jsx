import React from 'react';
import NavBar from '../NavBar/NavBar';
import './landing.css';


export default function Landing() {
  return (
    <div id="landing-page">
      <NavBar/>
      <h2>Jevaughn Williams</h2>
      <h3>Full-Stack Web Developer</h3>
      <h3>Scroll to explore</h3>
      <div className='down-arrow'>
        <img src='images/down.png' width='50px' height='50px'/>
        <img src='images/down.png' width='50px' height='50px'/>
        <img src='images/down.png' width='50px' height='50px'/>
      </div>

    </div>
  )
}