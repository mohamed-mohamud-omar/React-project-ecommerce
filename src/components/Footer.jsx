import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t-4 border-indigo-600 pt-10">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">E-Shop</h3>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop shop for all your needs. <br />
              Stylish. Affordable. Reliable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition duration-300">Products</Link></li>
              <li><Link to="/blogs" className="text-gray-400 hover:text-white transition duration-300">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">📍 123 E-Shop Street</p>
            <p className="text-gray-400 mb-2">🏙️ City, Country</p>
            <p className="text-gray-400 mb-2">📧 info@eshop.com</p>
            <p className="text-gray-400">📞 +252 613 111 111</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">E-Shop</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
