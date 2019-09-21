import React from 'react';
import { Router, Link } from "@reach/router";
import About from './about.js';
import Home from './home.js';
import Blog from './blogposts.js';
import Contact from './contact.js';
import NotFound from './notfound.js';
import MobileIcon from './nav/mobileicon.js';

const Header = () => (

  <header>
    <nav>
      <MobileIcon />
      <div className="menu sidebarmenu">
        <div className="sidebarmenuInner">
          <Link to="/">Home</Link>{" "}
          <Link to="about">About</Link>
          <Link to="blog">Blog</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    </nav>
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Blog path="/blog" />
      <Contact path="/contact" />
      <NotFound default />
    </Router>
  </header>

)

export default Header
