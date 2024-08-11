import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id='logo'><img src="https://www.careervira.com/_next/image?url=https%3A%2F%2Fd2lk14jtvqry1q.cloudfront.net%2Fmedia%2Fsmall_GUVI_1_c02a18fad7.png&w=640&q=75" alt="guvi-logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto ">
      <li className="nav-item mx-auto">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              All
            </NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to="/fullstack" activeClassName="active" className="nav-link">
              Full Stack
            </NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to="/datascience" activeClassName="active" className="nav-link">
              Datascience
            </NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to="/cybersecurity" activeClassName="active" className="nav-link">
              Cyber Security
            </NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to="/career" activeClassName="active" className="nav-link">
              Career
            </NavLink>
          </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav