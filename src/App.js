import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import About from './components/about.js';
import Home from './components/home.js';



const App = () => (
  <div>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="about">About</Link>
    </nav>

    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </div>
);



export default App;
