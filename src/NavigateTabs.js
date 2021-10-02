import React from "react";
import { Link, useLocation } from "react-router-dom";
{/*import pdf from "./components/images/Resume.pdf"*/}

function NavigateTabs() {

  const location = useLocation();

  return (

    <div className="jumbotron">
      
    <div className="navbar navbar-expand-lg" >
      <h2 style={{marginLeft: 20}} id="profname">Judy Motha</h2>
     
      <ul className="nav navbar-brand collapse navbar navbar-collapse" >
      
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
    </div>
    
    
  );
}

export default NavigateTabs;