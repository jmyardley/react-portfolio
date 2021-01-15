import React from "react";
import jordan from "../Assets/jordan.png";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <img src={jordan} alt="Me" width="100%" />
        </div>

        <div className="col-md-8">
          <div className="titles">
            Web Developer
            <p className="contact">Charlotte, NC</p>
            <p className="contact"><i className="muted">Contact:</i> jmyardley at gmail</p>
          </div>
        </div>



        <p>I am a developer from Charlotte, North Carolina. I have previously called Boston and Nashville
        home. I enjoy problem solving, eating Bojangles, and watching the NBA. </p>

        <p>After completing undergrad in the <a href="https://econ.unc.edu/">Department of Economics</a> at the <a href="https://www.unc.edu">University of North Carolina</a> (Chapel Hill), I worked in accounting at <a href="https://www.aramark.com/">Aramark</a>, followed by a stint as a freelance touring bassist and music teacher in Nashville, TN. I am currently continuing my education in the <a href="https://bootcamp.uncc.edu/coding/">Coding Bootcamp at UNC Charlotte</a>.</p>

      </div>
    </div>



  );
}

export default Home;
