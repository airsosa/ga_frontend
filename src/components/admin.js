import React from 'react';
//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateContent from './admin/create-content';

/*import Navbar from "./navbar";
/import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";
import Services from "./components/services";
import Team from "./components/team";
import Contact from "./components/contact"; */

function App() {
  return (
    <Router>
      <div>
        <Route path="/admin/content/create" component={CreateContent} />
      </div>
    </Router>
  );
}

export default App;
