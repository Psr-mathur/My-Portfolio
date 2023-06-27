import React from "react";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className=" mb-4">PROJECTS</h2>
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top projimge"
              src="/images/desi-social.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Social Media Website</h5>
              <p className="card-text">
                <i className="fa-solid fa fa-code-fork">
                  {" "}
                  &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                <a
                  href="https://github.com/Psr-mathur/desisocial"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  https://github.com/Psr-mathur/desisocial
                </a>
              </p>
              <p className="card-text">
                <i className="fa-solid fa fa-link">
                  &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                <a
                  href="https://desisocial.onrender.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  desisocial.onrender.com
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top projimge"
              src="/images/orderfood.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Food Order Website</h5>
              <p className="card-text">
                <i className="fa-solid fa fa-code-fork">
                  {" "}
                  &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                <a
                  href="https://github.com/Psr-mathur/order-food"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  https://github.com/Psr-mathur/order-food
                </a>
              </p>
              <p className="card-text">
                <i className="fa-solid fa fa-link">
                  &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                <a
                  href="https://psr-mathur.github.io/order-food/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  psr-mathur.github.io/order-food/
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top projimge"
              src="/images/contactman.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Contact Management App</h5>
              <p className="card-text">
                <i className="fa-solid fa fa-code-fork">
                  {" "}
                  &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                <a
                  href="https://github.com/Psr-mathur/contact-management"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  https://github.com/Psr-mathur/contact-management
                </a>
              </p>
              <p className="card-text">
                <i className="fa-solid fa fa-link">
                  &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                </i>
                <a
                  href="https://psr-mathur.github.io/contact-management/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  psr-mathur.github.io/contact-management/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
