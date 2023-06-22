import React from "react";
import './Navbar.css';


export default function NavBar() {

  return(
    <nav className="Nav-bar">
      <div className="drop-down-menu">
        <ul>
          <li><a href='#about'>About</a></li>
          <li>|</li>
          <li><a href='#skills'>Skills</a></li>
          <li>|</li>
          <li><a href='#projects'>Projects</a></li>
          <li>|</li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
    
    </nav>
  )
}