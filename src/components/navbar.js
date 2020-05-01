import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
       <Link to="/" className="navbar-brand">Goldagric</Link>
       <div className="collpase navbar-collapse">
       <ul className="navbar-nav mr-auto">
         <li className="navbar-item">
           <Link to="/who-we-are" className="nav-link">Who We Are</Link>
         </li>
         <li className="navbar-item">
           <Link to="/products" className="nav-link">Products</Link>
         </li>
         <li className="navbar-item">
           <Link to="/services" className="nav-link">Services</Link>
         </li>
         <li className="navbar-item">
           <Link to="/our-team" className="nav-link">Our Team</Link>
         </li>
         <li className="navbar-item">
           <Link to="/contact-us" className="nav-link">Contact Us</Link>
         </li>
       </ul>
       </div>
     </nav>
    );
  }
}
