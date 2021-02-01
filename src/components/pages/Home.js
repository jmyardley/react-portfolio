import React from "react";
import jordan from "../Assets/jordan.png";

function Home() {
  return (
    <div className="container-fluid" style={{ "max-width": "700px" }}>

      <div className="row">
        <div className="col-md-12">
          <h1>About Me</h1>
          <hr style={{ "height": "5", "color": "#E1E1E1", "background-color": "#E1E1E1" }} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <img src={jordan} alt="Me" width="100%" />
        </div>
        <div className="col-md-8">
          <div className="titles">
            <br />
            Web Developer
            <br />
            <p className="contact">Charlotte, NC</p>
            <p className="contact"><i className="muted">Contact:</i> jmyardley at gmail</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <hr style={{ "height": "5", "color": "#E1E1E1", "background-color": "#E1E1E1" }} />

          <p>I am a developer from Charlotte, North Carolina. I have previously called Boston and Nashville
        home. I enjoy problem solving, eating Bojangles, and watching the NBA. </p>

          <p>After completing undergrad in the <a href="https://econ.unc.edu/" rel="noreferrer" target="_blank">Department of Economics</a> at the <a href="https://www.unc.edu" rel="noreferrer" target="_blank">University of North Carolina</a> (Chapel Hill), I worked in accounting at <a href="https://www.aramark.com/" rel="noreferrer" target="_blank">Aramark</a>, followed by a stint as a freelance touring bassist and music teacher in Nashville, TN. I am currently continuing my education in the <a href="https://bootcamp.uncc.edu/coding/" rel="noreferrer" target="_blank">Coding Bootcamp at UNC Charlotte</a>.</p>
        </div>
      </div>

    </div>



  );
}

export default Home;
