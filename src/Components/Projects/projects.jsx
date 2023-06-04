import React from "react";

// Project description as an array of object
const projects = [
  {
    name: "HabTrack",
    description: "",
    technologies: "React, HTML, CSS, Javascript,PostgreSQL, Express, Nodejs, Axios, Material UI, Toast UI, ApexCharts & MomentJS",
    github: "https://github.com/Jevaughn-W/HabitTracker"
  },
  {
    name: "Lighthouse-labs Scheduler",
    description: "The app allows an user to create, edit and delete interviews based on 25 available slots, Monday through Friday. The app also includes features which notify users of errors such as a failed API requests or missing inputs when creating or changing an interview.",
    technologies: "React, HTML, Javascript, CSS, ostgreSQL, Express, Nodejs, Axios, Jest & Cypress",
    github: "https://github.com/Jevaughn-W/lighthouse-labs-scheduler"
  },
  {
    name: "Food-Pick-Up-App",
    description: "This is a full stack web application designed to be a portal for users to pre-order food for pickup at a simulated restaurant called Dine&Dash.",
    technologies: "HTML5, CSS3, Javascript, Bootstrap, jQuery, Twillio API, SASS, PostgreSQL",
    github: "https://github.com/Jevaughn-W/Food-Pick-Up-App"
  }
];

const projectList = projects.map((project, index)=> {
  return(
    <section key={index} className="project-card">
      <h4 className="title"><a herf={project.github}>{project.name}</a></h4>
      <div className="card-details">
        <h2>placeholder</h2>
        <div className="project-description">
          <span>Description:</span><p>{project.description}</p>
          <span>Technologies:</span><p>{project.technologies}</p>
        </div>
      </div>
    </section>
  )
});

console.log(projectList)

export default function Projects() {
  return (
    <div id="projects">
      <h2 className="section-header">Projects</h2>
      {projectList}
    </div>
  )
}