import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const handleLogout = () => {
   localStorage.removeItem("token");
   navigate("/")
  
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
       {token ? (
        <>
        <li className="nav-item">
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" onClick={handleLogout}>Logout</NavLink>
        </li>
        </>
      ):(
        <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      )
      
      }
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
