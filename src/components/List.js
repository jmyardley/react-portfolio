import React from "react";

function List(props) {
  return (
    <div>
      {props.projects.map(item => (
        <div>
          <hr style={{ "height": "5", "color": "#E1E1E1", "background-color": "#E1E1E1" }} />
          <div className="container">
            <div className="row">
              <h3>{item.name}</h3>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img src={item.img} alt={item.name} style={{ "padding": "10px", "float": "center", "width": "100%" }} />
              </div>
              <div className="col-md-8">
                <p>{item.desc}<br /><a href={item.app}>App</a>, <a href={item.repo}>Repo</a></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
