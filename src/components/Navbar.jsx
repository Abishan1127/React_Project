import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white py-4 shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyCompany</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="/services" className="hover:text-gray-200">Services</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
