import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import './App.css';

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";
import Services from "./components/services";
import Team from "./components/team";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/who-we-are" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/our-team" component={Team} />
        <Route path="/contact-us" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
