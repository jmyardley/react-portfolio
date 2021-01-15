import React from "react";

function Footer() {
  return (
    <footer style={{
      "position": "fixed",
      "left": "0",
      "bottom": "0",
      "width": "100%",
      "background-color": "#E1E1E1",
      "color": "white",
      "text-align": "center"
    }}>
      <div className="post-date" style={{"color": "grey"}}>
        created by James Yardley using React
      </div>
    </footer>
  );
}

export default Footer;
