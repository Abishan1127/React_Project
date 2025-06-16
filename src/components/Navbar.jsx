import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const closeOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand fw-bold text-primary">
            Innovatech Solutions
          </Link>

          <button
            className="btn d-md-none"
            type="button"
            onClick={toggleOffcanvas}
            aria-label="Menu"
          >
            <i className="bi bi-list fs-2"></i>
          </button>

          {/* Desktop Links */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <Link to="/" className="nav-link text-dark">Home</Link>
            <Link to="/services" className="nav-link text-dark">Services</Link>
            <Link to="/about" className="nav-link text-dark">About</Link>
            <Link to="/contact" className="nav-link text-dark">Contact</Link>
            <Link to="/" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas Full-Screen Overlay */}
      <div
        className={`offcanvas offcanvas-start show bg-white ${showOffcanvas ? 'd-block' : 'd-none'}`}
        tabIndex="-1"
        style={{ width: '100%', zIndex: 1045 }}
      >
        <div className="offcanvas-header justify-content-between border-bottom">
          <h5 className="offcanvas-title">Menu</h5>
          <button type="button" className="btn-close" onClick={closeOffcanvas}></button>
        </div>
        <div className="offcanvas-body d-flex flex-column align-items-start p-4 gap-3">
          <Link to="/" className="nav-link text-dark" onClick={closeOffcanvas}>Home</Link>
          <Link to="/services" className="nav-link text-dark" onClick={closeOffcanvas}>Services</Link>
          <Link to="/about" className="nav-link text-dark" onClick={closeOffcanvas}>About</Link>
          <Link to="/contact" className="nav-link text-dark" onClick={closeOffcanvas}>Contact</Link>
          <Link to="/" className="btn btn-primary mt-3" onClick={closeOffcanvas}>Get Started</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
