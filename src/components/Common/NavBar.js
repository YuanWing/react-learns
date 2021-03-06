import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => (
  <ul className="nav-bar">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/list">List</Link></li>
    <li className="source">来源于: {props.title}</li>
  </ul>
);

export default NavBar;
