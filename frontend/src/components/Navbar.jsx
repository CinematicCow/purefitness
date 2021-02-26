import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <Router>
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div className="container">
            <div className="nav-header">
              <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle">
                <i />
              </a>
              <h1 id="fh5co-logo">
                <a href="/">
                  Pure<span>Fitness</span>
                </a>
              </h1>
              {/* START #fh5co-menu-wrap */}
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                  <li className="active">
                    <a href="/" className="clicko">
                      Home
                    </a>
                  </li>
                  <li>
                    <NavHashLink smooth to="#programs" id="clicko">
                      Programs
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink smooth to="#trainers" id="clicko">
                      Trainers
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink smooth to="#price" id="clicko">
                      Pricing
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink smooth to="#contact" id="clicko">
                      Contact
                    </NavHashLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default Navbar;
