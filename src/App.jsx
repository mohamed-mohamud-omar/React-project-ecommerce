import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import About from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import { CartProvider, useCart } from '/context/CartContext';
import Cart from './pages/Cart';
import AdminProducts from "./pages/AdminProducts";



function AppContent() {
  // ⛔️ Don't call useCart outside the function body
  const { message } = useCart(); // ✅ NOW it's inside function

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
          {message}
        </div>
      )}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminProducts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
