import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // ✅ Put the useEffect right here
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data); // ← this will show in browser console
        setProducts(data); // ← this sets the products in your component
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);


  const filteredProducts = products.filter(product => {
    if (category === 'all') return true;
    return product.category === category;
  });

  const priceFilteredProducts = filteredProducts.filter(product => {
    if (priceRange === 'all') return true;
    if (priceRange === 'under50') return product.price < 50;
    if (priceRange === '50to100') return product.price >= 50 && product.price <= 100;
    if (priceRange === 'over100') return product.price > 100;
    return true;
  });

  const sortedProducts = [...priceFilteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftOffset = Math.floor(maxVisiblePages / 2);
      const rightOffset = Math.ceil(maxVisiblePages / 2) - 1;

      if (currentPage <= leftOffset) {
        for (let i = 1; i <= maxVisiblePages - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - rightOffset) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) =>
      number === '...' ? (
        <span key={index} className="px-2 text-gray-500">...</span>
      ) : (
        <button
          key={index}
          onClick={() => paginate(number)}
          className={`px-3 py-1 rounded text-sm ${
            currentPage === number
              ? 'bg-gray-900 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
          }`}
        >
          {number}
        </button>
      )
    );
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">Our Products</h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 rounded border border-gray-300 bg-white shadow-sm"
            >
              <option value="all">All Categories</option>
              <option value="tops">Tops</option>
              <option value="bottoms">Bottoms</option>
              <option value="outerwear">Outerwear</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Shoes">Shoes</option>
            </select>
          </div>

          <div>
            <select
              value={priceRange}
              onChange={(e) => {
                setPriceRange(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 rounded border border-gray-300 bg-white shadow-sm"
            >
              <option value="all">All Prices</option>
              <option value="under50">Under $50</option>
              <option value="50to100">$50 - $100</option>
              <option value="over100">Over $100</option>
            </select>
          </div>

          <div>
            <select
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 rounded border border-gray-300 bg-white shadow-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-16">
            No products match your filters.
          </div>
        )}

        {/* Pagination */}
        {sortedProducts.length > productsPerPage && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <button
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded bg-white border border-gray-200 text-sm ${
                  currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Previous
              </button>

              {renderPageNumbers()}

             <button
  onClick={() => {
    setCategory('all');
    setPriceRange('all');
    setSortOption('featured');
    setCurrentPage(1);
  }}
  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
>
  Reset Filters
</button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
