import React from 'react'
import { Link } from 'react-router-dom';
import './styleall.css'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand navv" to="/">
            E-commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active nnv" to="/">
                  Home Page
                </Link>
              </li>
            </ul>

            {/* this icons  */}

            <div className="icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <a target='blank' href="https://www.linkedin.com/in/ahmed-alayadi-3a3bb3291/">
            
                <i class="fa-brands fa-linkedin"></i>
              </a>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default  Navbar;
