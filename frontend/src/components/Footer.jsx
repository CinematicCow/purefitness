import React from "react";

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 animate-box">
              <h3 className="section-title">About Us</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics.
              </p>
            </div>
            <div className="col-md-4 animate-box">
              <h3 className="section-title">Our Address</h3>
              <ul className="contact-info">
                <li>
                  <i className="icon-map-marker" />
                  2nd floor, XYZ Complex, Opposite Central Church, Neshvilla
                  Road, Dehradun-248001
                </li>
                <li>
                  <i className="icon-phone" />
                  (+91)1234567890
                </li>
                <li>
                  <i className="icon-envelope" />
                  <a href="#">Raj@purefitness.com</a>
                </li>
                <li>
                  <i className="icon-globe2" />
                  <a href="#">www.purefitness.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 animate-box">
              <h3 className="section-title">Drop us a line</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={7}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    id="btn-submit"
                    className="btn btn-send-message btn-md"
                    defaultValue="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row copy-right">
            <div className="col-md-6 col-md-offset-3 text-center">
              <p className="fh5co-social-icons">
                <a href="#">
                  <i className="icon-twitter2" />
                </a>
                <a href="#">
                  <i className="icon-facebook2" />
                </a>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
                <a href="#">
                  <i className="icon-dribbble2" />
                </a>
                <a href="#">
                  <i className="icon-youtube" />
                </a>
              </p>
              <p>Copyright © 2021 Pure Fitness. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
