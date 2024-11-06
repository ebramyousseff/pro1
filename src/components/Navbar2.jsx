import React from 'react'
import { Link } from 'react-router-dom';
import './styleall.css';
function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand navv" to="#">E-commerce</Link>
   
  </div>
</nav>
</>


  )
}

export default  Navbar;
