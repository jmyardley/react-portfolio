import React from "react";
import List from "../../components/List";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Secure Password Generator",
      img: "https://user-images.githubusercontent.com/35856061/104675518-aefec900-56b3-11eb-8e4f-1f8d82991104.png",
      desc: "Using Javascript to create and display a randomly generated password based on user-selected criteria.",
      app: "https://jmyardley.github.io/password-generator/",
      repo: "https://github.com/jmyardley/password-generator"
    }
  ];
  return (
    <div className="container-fluid" style={{"max-width": "700px"}}>
      <h1>Projects Page</h1>
      <List projects={projects} />
    </div>
  );
}

export default Projects;
