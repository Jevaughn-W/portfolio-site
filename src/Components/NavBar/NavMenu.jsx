import React from "react";


export default function NavMenu(props) {
  return (
    <div className="drop-down-menu">
      <ul onClick={props.onClickHander}>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  )
}