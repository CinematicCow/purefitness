import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <Navbar />
        {/* background image black and upper portion */}

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
                    <span>
                      <a className="btn btn-primary" href="#">
                        Start Your Journey
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end background image black and upper portion */}
      </div>
    </div>
  );
}

export default App;
