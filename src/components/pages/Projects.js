import React from "react";
import List from "../../components/List";

function Projects() {
  const projects = [
    {
      id: 0,
      name: "Collaborative Event Planner",
      img: "https://user-images.githubusercontent.com/35856061/106506366-9eae6280-6497-11eb-865b-a34db08586f1.png",
      desc: "MERN stack app built in React employing three associated NoSQL tables in MongoDB to track users, events, and to-do items by id.",
      app: "https://salty-eyrie-99522.herokuapp.com",
      repo: "https://github.com/jmyardley/collaborative-event-planner"
    },
    {
      id: 1,
      name: "React Standings App",
      img: "https://user-images.githubusercontent.com/35856061/106506260-79b9ef80-6497-11eb-995f-7b5646715896.png",
      desc: "React app using Axios to retrieve, sort, and render NBA standings to East and West tabs.",
      app: "https://react-standings.herokuapp.com/",
      repo: "https://github.com/jmyardley/react-standings"
    },
    {
      id: 2,
      name: "Burger App",
      img: "https://user-images.githubusercontent.com/35856061/104677468-752fc180-56b7-11eb-82ce-e4079a70c3dd.png",
      desc: "Demonstrating the ability to take in user input through a form and interact with an SQL database using Node.js, ORM, Express, and Handlebars. Deployed via Heroku using the JAWS_DB SQL extension.",
      app: "https://damp-mesa-62613.herokuapp.com/",
      repo: "https://github.com/jmyardley/burger"
    },
    {
      id: 3,
      name: "Secure Password Generator",
      img: "https://user-images.githubusercontent.com/35856061/104675518-aefec900-56b3-11eb-8e4f-1f8d82991104.png",
      desc: "Using Javascript to create and display a randomly generated password based on user-selected criteria.",
      app: "https://jmyardley.github.io/password-generator/",
      repo: "https://github.com/jmyardley/password-generator"
    },
    {
      id: 4,
      name: "Weather Dashboard",
      img: "https://user-images.githubusercontent.com/35856061/104677760-fedf8f00-56b7-11eb-915b-07ca60524b18.png",
      desc: "Interacting with the OpenWeatherMap API to retrieve and display weather information for user-selected cities.",
      app: "https://jmyardley.github.io/weather-dashboard/",
      repo: "https://github.com/jmyardley/weather-dashboard"
    },
    {
      id: 5,
      name: "Test Scheduling App (Collaboration)",
      img: "https://user-images.githubusercontent.com/35856061/104678523-a27d6f00-56b9-11eb-9fb1-d8fc640b70cb.png",
      desc: "Implementing Passport authentication, JawsDB, and the FullCalendar package to create a user portal to register for a medical test.",
      app: "https://thawing-beach-04875.herokuapp.com/",
      repo: "https://github.com/jmyardley/stellar-app"
    }
  ];
  return (
    <div className="container-fluid" style={{"max-width": "700px"}}>
      <h1>Projects</h1>
      <List projects={projects} />
    </div>
  );
}

export default Projects;
