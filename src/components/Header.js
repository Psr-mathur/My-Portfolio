import React from "react";
import ReactTyped from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper" id="header">
      <div className="main-info">
        <h1>Web Dev</h1>
        <ReactTyped
          className="typed-text"
          strings={["Hello, I'm Prakash."]}
          typeSpeed={40}
          backSpeed={0}
        />
        <ReactTyped
          className="typed-text"
          strings={["FullStack Developer", "Web Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#contactme" className="btn btn-outline-primary">
          CONTACT ME
        </a>
      </div>
    </div>
  );
};

export default Header;
