import React from 'react';
import {
  Link,
} from 'react-router-dom';

const NavBar = (props) => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/list">List</Link></li>
    <li>来源于: {props.title}</li>
  </ul>
);

export default NavBar;
