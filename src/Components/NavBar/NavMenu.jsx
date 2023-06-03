import React from "react";
import './NavMenu.css';


export default function NavMenu(props) {
  return (
    <div className="drop-down-menu">
      <ul>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#skills'>Skills</a></li>
      </ul>
    </div>
  )
}