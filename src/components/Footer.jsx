import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 mt-12">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      <div className="flex space-x-4 mt-3 md:mt-0 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
