import "./App.css";

import Navbar from "./components/Navbar"; // Line 9
import Programs from "./components/Programs"; // Line 39
import Trainers from "./components/Trainers"; // Line 62
import Price from "./components/Price"; // Line 90
import Footer from "./components/Footer";

function App() {
  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <Navbar />
        {/* Main background image black and upper portion */}

        <div className="fh5co-hero">
          <div className="fh5co-overlay" />
          <div
            className="fh5co-cover"
            // data-stellar-background-ratio="0.5"
            style={{
              backgroundImage: "url(images/home-image.jpg)",
              backgroundPosition: "center",
            }}
          >
            <div className="desc animate-box">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <h2>
                      Pure Fitness &amp; Health <br />
                      is a <b>Mentality.</b>
                    </h2>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main end background image black and upper portion */}

        <Programs id="programs" />

        {/* overlay parallex image */}
        <div
          className="fh5co-parallax"
          style={{ backgroundImage: "url(images/home-image-3.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                <div className="fh5co-intro fh5co-table-cell animate-box">
                  <h1 className="text-center">Commit To Be Fit</h1>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End overlay parallex image */}

        <Trainers id="trainers" />

        {/* overlay parallex image  */}
        <div
          className="fh5co-parallax"
          style={{ backgroundImage: "url(images/home-image-2.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 fh5co-table">
                <div className="fh5co-intro fh5co-table-cell box-area">
                  <div className="animate-box">
                    <h1>Pure Fitness Classes this summer</h1>
                    <p>Pay now and get 25% Discount</p>
                    <a href="#" className="btn btn-primary">
                      Become A Member
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of  overlay parallex image  */}

        <Price id="price" />
        <Footer id="#contact" />
      </div>
    </div>
  );
}

export default App;
