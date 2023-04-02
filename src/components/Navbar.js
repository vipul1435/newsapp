import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <h2 className="mx-3">News App</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
                <li className="nav-item"><Link to="/business" className="nav-link active">Business</Link></li>
                <li className="nav-item"><Link to="/entertainment" className="nav-link active">Entertainment</Link></li>
                <li className="nav-item"><Link to="/health" className="nav-link active">Health</Link></li>
                <li className="nav-item"><Link to="/science" className="nav-link active">Science</Link></li>
                <li className="nav-item"><Link to="/sports" className="nav-link active">Sports</Link></li>
                <li className="nav-item"><Link to="/technology" className="nav-link active">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
