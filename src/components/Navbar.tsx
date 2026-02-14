import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-primaryBlue">
          Veebha International
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-primaryBlue transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-primaryBlue transition">
            About
          </Link>
          <Link to="/academics" className="hover:text-primaryBlue transition">
            Academics
          </Link>
          <Link to="/contact" className="hover:text-primaryBlue transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-primaryOrange text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Admissions Open
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
