import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar nav-bar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to={'/'} className="navbar-brand">
            <i className="fa fa-mobile text-warning">Contact <span className="text-warning">Manager</span></i>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar;