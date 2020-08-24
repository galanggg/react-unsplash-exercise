import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        UNSPLASH
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/filter" className="nav-link">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experiment" className="nav-link">
              Experiment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
