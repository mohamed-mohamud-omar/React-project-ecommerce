import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-yellow-300 font-semibold border-b-2 border-yellow-300 py-2 px-3'
      : 'text-white hover:text-yellow-300 font-medium py-2 px-3 transition duration-300';

  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="text-white text-3xl font-extrabold tracking-wide hover:scale-105 transform transition duration-300"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-300 to-white drop-shadow">E-Shop</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/products" className={linkClasses}>Products</NavLink>
            <NavLink to="/blogs" className={linkClasses}>Blogs</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          </div>

          {/* Right Side - Cart + Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative text-white hover:text-yellow-300 transition duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4m-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-lg animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <NavLink to="/login" className="text-white hover:text-gray-200 px-4 py-2 rounded transition duration-300">
              Log In
            </NavLink>
            <NavLink
              to="/login"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-md"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 shadow-inner space-y-2">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/products" className={linkClasses}>Products</NavLink>
          <NavLink to="/blogs" className={linkClasses}>Blogs</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          <NavLink to="/login" className={linkClasses}>Log In</NavLink>
          <Link to="/cart" className="text-white hover:text-yellow-300 transition duration-300">
            Cart ({cartItems.length})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
