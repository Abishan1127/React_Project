const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Company Info */}
        <div>
          <h5 className="text-lg font-bold mb-2">Innovatech Solutions</h5>
          <p>
            Driving digital transformation through cutting-edge technology and dedicated expertise.
          </p>
        </div>

        {/* Links */}
        <div>
          <h6 className="font-semibold mb-2">Links</h6>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="font-semibold mb-2">Contact</h6>
          <p>123 Green Street, Suite 456</p>
          <p>Sustainable City, CA 90001</p>
          <p className="mt-2">+1 (555) 123–4567</p>
          <p>info@innovatech.com</p>
        </div>

        {/* Socials */}
        <div>
          <h6 className="font-semibold mb-2">Follow Us</h6>
          <div className="flex space-x-4 mt-2 text-lg">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Innovatech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
