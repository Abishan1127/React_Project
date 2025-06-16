const Footer = () => {
  return (
    <footer className="bg-light mt-5 border-top">
      <div className="container py-5">
        <div className="row text-muted small">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-dark">Innovatech Solutions</h5>
            <p>
              Driving digital transformation through cutting-edge technology and dedicated expertise.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-dark">Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-muted text-decoration-none">About</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-dark">Contact</h6>
            <p>123 Green Street, Suite 456</p>
            <p>Sustainable City, CA 90001</p>
            <p className="mt-2">+1 (555) 123–4567</p>
            <p>info@innovatech.com</p>
          </div>

          {/* Socials */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-dark">Follow Us</h6>
            <div className="d-flex gap-3 mt-2 fs-5">
              <a href="#"><i className="bi bi-twitter text-muted"></i></a>
              <a href="#"><i className="bi bi-facebook text-muted"></i></a>
              <a href="#"><i className="bi bi-linkedin text-muted"></i></a>
              <a href="#"><i className="bi bi-instagram text-muted"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-subtle text-center py-3 text-muted small">
        © {new Date().getFullYear()} Innovatech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
