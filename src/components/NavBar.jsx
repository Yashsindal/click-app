import React from 'react'
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to>Click <i class="fas fa-camera"></i></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`}  to="/">Gallery</Link>
          <Link className={`nav-link ${location.pathname==="/camera"?"active":""}`} to="/camera">Camera</Link>
        </div>
      </div>
    </div>
  </nav>
    
  )
}

export default NavBar
