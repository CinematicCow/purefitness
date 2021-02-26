import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div id="fh5co-header">
      <header id="fh5co-header-section">
        <div className="container">
          <div className="nav-header">
            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle">
              <i />
            </a>
            <h1 id="fh5co-logo">
              <a href="index.html">
                Pure<span>Fitness</span>
              </a>
            </h1>
            {/* START #fh5co-menu-wrap */}
            <nav id="fh5co-menu-wrap" role="navigation">
              <ul className="sf-menu" id="fh5co-primary-menu">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#programs">Programs</a>
                </li>
                <li>
                  <a href="#trainers">Trainers</a>
                </li>
                <li>
                  <a href="#price">Pricing</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
