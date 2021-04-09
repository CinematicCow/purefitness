import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pure Fitness</title>
      </Head>

      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <Navbar />

          {/* Main backgr ound image black and upper portion */}

          <div className="fh5co-hero">
            <div className="fh5co-overlay" />
            <div
              className="fh5co-cover"
              // data-stellar-background-ratio="0.5"
              style={{
                backgroundImage: "url(https://i.ibb.co/s9mYSNK/home-image.jpg)",
                backgroundPosition: "center",
              }}>
              <div className="desc ">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <h2>
                        <b>PURE FITNESS</b> <br />
                        Coming Soon...
                      </h2>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main end background image black and upper portion */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
