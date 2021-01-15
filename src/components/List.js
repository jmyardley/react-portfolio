import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <div>
      {props.projects.map(item => (
        <div className="container">
          <div className="row">
            <h3>{item.name}</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={item.img} alt={item.name} style={{"padding": "10px", "float": "center", "width": "100%"}} />
            </div>
            <div className="col-md-8">
              <p>{item.desc}<br/><a href={item.app}>App</a>, <a href={item.repo}>Repo</a></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
