import { Dark } from "./../../configcontext/Darkcontext";
import React, { useContext ,useState } from 'react';

import { NavLink, Link } from 'react-router-dom'
import './Nav.css';
function Nav() {
    const { dark, setDark } = useContext(Dark);
 
    function change() {
      console.log(dark)
      if (dark === "dark") {
        setDark("light");
       
      } else {
        setDark("dark");
        // const cardBody = document.querySelector('.card-body');
        // cardBody.classList.toggle('card');
      }
    }
  return (
<>
 
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to='/ProductList'>Products </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled" href="#">  Cart</a>
        </li>
          

          
    

        <div className="cartbtn">
          <li>

          <button
          onClick={change}
          style={dark === "dark" ? { background: "black" } : { background: "red" }}
        >
          {dark}
        </button>
          </li>
<li>

  
<button
         
         style={{ background: "red" }}
       >
Cart        </button>
</li>
</div>
      </ul>
    </div>
  </nav>
  </>
  )
}

export default Nav