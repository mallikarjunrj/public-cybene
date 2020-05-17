import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Logo from "./image/Logo.png";

class Nav extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/private">Private</Link>
          </li>
          <li>
            <Link to="/">Devices</Link>
          </li>
          <li className="log-button">
            <Button
              color="secondary"
              size="sm"
              onClick={isAuthenticated() ? logout : login}
            >
              {isAuthenticated() ? "Log Out" : "Log In"}
            </Button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
