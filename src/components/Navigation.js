import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="ui secondary menu">
          <div className="ui container">
            <div className="active item">
              <Link to="/" className="navbar-brand">
                Anime-Index
              </Link>
            </div>
            <div className="right menu">
              <div className="item">
                <Link to="/">HOME</Link>
              </div>
              <div className="item">
                <Link to="/about">ABOUT</Link>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
