import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"

function Navbar() {
  return (
    <Router>
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div className="container">
            <div className="nav-header">
              <a href="#" className="js-fh5co-nav-toggle ">
                <i />
              </a>
              <h1 id="fh5co-logo">
                <a href="/">
                  <img src="images/pf-logo.png" width="80" alt="pf-logo" />
                  &nbsp; Pure<span>Fitness</span> &nbsp;&nbsp;
                </a>
              </h1>
              {/* START #fh5co-menu-wrap */}
            </div>
          </div>
        </header>
      </div>
    </Router>
  )
}

export default Navbar
