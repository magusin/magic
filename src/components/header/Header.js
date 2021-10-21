/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/sets">Extension</Link>
          </li>
          </ul>
      </nav>

    );
  }
}
