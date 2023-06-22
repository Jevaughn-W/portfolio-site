import React from "react";
import './projects.css';


// Project description as an array of object
const projects = [
  {
    name: "HabTrack",
    description: "",
    technologies: "React, HTML, CSS, Javascript,PostgreSQL, Express, Nodejs, Axios, Material UI, Toast UI, ApexCharts & MomentJS",
    github: "https://github.com/Jevaughn-W/HabitTracker",
    image: "https://github.com/Jevaughn-W/HabitTracker/blob/master/docs/Screenshot%202023-03-22%20at%209.50.17%20PM.png?raw=true"
  },
  {
    name: "Lighthouse-labs Scheduler",
    description: "The app allows an user to create, edit and delete interviews based on 25 available slots, Monday through Friday. The app also includes features which notify users of errors such as a failed API requests or missing inputs when creating or changing an interview.",
    technologies: "React, HTML, Javascript, CSS, ostgreSQL, Express, Nodejs, Axios, Jest & Cypress",
    github: "https://github.com/Jevaughn-W/lighthouse-labs-scheduler",
    image: "https://github.com/Jevaughn-W/lighthouse-labs-scheduler/blob/master/docs/Screen%20Shot%202023-01-16%20at%207.07.40%20AM.png?raw=true"
  },
  {
    name: "Food-Pick-Up-App",
    description: "This is a full stack web application designed to be a portal for users to pre-order food for pickup at a simulated restaurant called Dine&Dash.",
    technologies: "HTML5, CSS3, Javascript, Bootstrap, jQuery, Twillio API, SASS, PostgreSQL",
    github: "https://github.com/Jevaughn-W/Food-Pick-Up-App",
    image: ""
  }
];

const projectList = projects.map((project, index)=> {
  return(
    <section key={index} className="project-card">
      <div className="card-details">
        {/* <img src={project.image} alt="HabTrack"/> */}
        <div className="project-description">
          <h4 className="title"><a href={project.github} target="_blank" rel="noopener noreferrer">{project.name}</a></h4>
          <p>{project.description}</p>
          <p>Tech Stack</p>
          <p>{project.technologies}</p>
        </div>
      </div>
    </section>
  )
});

console.log(projectList)

export default function Projects() {
  return (
    <div id="projects">
      {projectList}
    </div>
  )
}