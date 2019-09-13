import React from 'react';
import { Router, Link } from "@reach/router";
import About from './about.js';
import Home from './home.js';
import Contact from './contact.js';
import NotFound from './notfound.js';

const Header = () => (

  <header>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </nav>
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Contact path="/contact" />
      <NotFound default />
    </Router>
  </header>

)

export default Header
