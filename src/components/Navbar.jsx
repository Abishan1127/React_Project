import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold text-primary">
          Innovatech Solutions
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-dark">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="btn btn-primary ms-md-3 mt-2 mt-md-0"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
