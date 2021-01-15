import React from "react";
import resume from "../Assets/resume.pdf";


function Links(props) {
  return (
    <div className="container-fluid" style={{"max-width": "700px"}}>
      <h1>Contact:</h1>
      <ul>
        <li><a href="https://www.linkedin.com/in/jmyardley/" rel="noreferrer" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/jmyardley" rel="noreferrer" target="_blank">Github</a></li>
        <li><a href={resume} rel="noreferrer" target="_blank">Resume</a></li>
        <li><a href="mailto:jmyardley@gmail.com" rel="noreferrer" target="_blank">Email</a></li>

      </ul>
    </div>
  );
}

export default Links;
