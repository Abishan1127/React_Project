import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-10 py-6">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      
      <div className="flex space-x-4 mt-4 md:mt-0">
        <Link to="/" className="hover:underline text-sm">Home</Link>
        <Link to="/about" className="hover:underline text-sm">About</Link>
        <Link to="/services" className="hover:underline text-sm">Services</Link>
        <Link to="/contact" className="hover:underline text-sm">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;