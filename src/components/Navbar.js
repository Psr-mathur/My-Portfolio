import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand px-3" href="#">
          PSR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1whbfOWty3AjcmfnbgEmAu5WFEP62Xksc/view?usp=sharing"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://auth.geeksforgeeks.org/user/prakashkumarggh/practice"
              >
                GFG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
