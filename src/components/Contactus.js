import React from "react";

const Contactus = () => {
  return (
    <div className="contactus" id="contactme">
      <div className="container">
        <section className="mb-4">
          <h1 className="fw-bold text-center mb-4">Hire Me.</h1>
          <p className="text-center mx-auto mb-5">
            <h5 className=" fst-italic">Available for work.</h5>
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="name" />
                      <label for="name" className="fw-lighter">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" />
                      <label for="email" className=" fw-lighter">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" />
                      <label for="subject" className="fw-lighter">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className=" md-textarea"
                      ></textarea>
                      <label for="message" className="fw-lighter">
                        Your message
                      </label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <button className="btn btn-outline-dark">Submit</button>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa fa-globe fa-2x"></i>
                  <p>Madhubani, Bihar</p>
                </li>

                <li>
                  <i className="fa fa-phone mt-4 fa-2x"></i>
                  <p>+91 75490 16390</p>
                </li>

                <li>
                  <i className="fa fa-envelope mt-4 fa-2x"></i>
                  <p>prakashkrindia@outlook.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactus;
