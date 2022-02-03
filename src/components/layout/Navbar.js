import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contract">Contract</NavLink>
            </li>
            
          </ul>
        </div>
        <Link className='btn btn-outline-light' to="/users/add">Add User</Link>
      </div>
    </nav>
  </div>;
}

export default Navbar;
