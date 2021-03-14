import React from "react"

function Footer() {
  return (
    <div id="contact">
      <footer>
        <div id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <h3 className="section-title">About Us</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics.
                </p>
              </div>
              <div className="col-md-4 ">
                <h3 className="section-title">Our Address</h3>
                <ul className="contact-info">
                  <li>
                    <i className="icon-map-marker" />
                    <a href="https://goo.gl/maps/sbiqsJrnNMiRvbXi9">
                      {" "}
                      2nd Floor, 17, Neshvilla Rd, near Central Methodist
                      Church, Dobhalwala, Chukkuwala, Dehradun, Uttarakhand
                      248001{" "}
                    </a>
                  </li>
                  <li>
                    <i className="icon-whatsapp" />
                    <a href="https://wa.link/penra3"> (+91)789-5555-620</a>
                  </li>
                  <li>
                    <i className="icon-envelope" />
                    <a href="mailto:raj.fitnessworld@gmail.com?subject=Gym Enquiry">
                      raj.fitnessworld@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="icon-globe2" />
                    <a href="https://purefitness.co.in">
                      www.purefitness.co.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row copy-right">
              <div className="col-md-6 col-md-offset-3 text-center">
                <p>Copyright© 2021 Pure Fitness. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
