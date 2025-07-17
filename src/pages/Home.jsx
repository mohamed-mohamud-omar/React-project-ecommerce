import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import myImage from "../assets/image.jpg"; // import your image
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();
  const [products] = useState([
    { 
      id: 1, 
      name: 'Premium Denim Jeans', 
      price: 89.99, 
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 
      category: 'Bottoms',
      link: '/products/1'
    },
    { 
      id: 2, 
      name: 'Classic White Shirt', 
      price: 49.99, 
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80', 
      category: 'Tops',
      link: '/products/2'
    },
    { 
      id: 3, 
      name: 'Slim Fit Blazer', 
      price: 129.99, 
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 
      category: 'Outerwear',
      link: '/products/3'
    },
    { 
      id: 4, 
      name: 'Casual Sneakers', 
      price: 79.99, 
      image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80', 
      category: 'Footwear',
      link: '/products/4'
    },
    { 
      id: 5, 
      name: 'Cotton Polo T-Shirt', 
      price: 29.99, 
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80', 
      category: 'Tops',
      link: '/products/5'
    },
    { 
      id: 6, 
      name: 'Chino Pants', 
      price: 59.99, 
      image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 
      category: 'Bottoms',
      link: '/products/6'
    },
  ]);

  const [blogs] = useState([
    { 
      id: 1, 
      title: 'Spring 2023 Men\'s Fashion Trends', 
      excerpt: 'Discover the essential styles for this season', 
      date: 'March 10, 2023', 
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/blog/spring-2023-trends'
    },
    { 
      id: 2, 
      title: 'How to Build a Capsule Wardrobe', 
      excerpt: 'The minimalist approach to men\'s fashion', 
      date: 'February 22, 2023', 
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      link: '/blog/capsule-wardrobe'
    },
    { 
      id: 3, 
      title: 'Dress for Success: Office Attire Guide', 
      excerpt: 'Professional looks for every workplace', 
      date: 'January 15, 2023', 
      image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      link: '/blog/office-attire-guide'
    },
  ]);



  return (

    
    <div className="font-sans">

      {/* ////////////// qeebta naciimo/////////////////  */}

 <div
  style={{
    backgroundImage: `url(${myImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  }}
  className="relative"
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

  <div className="relative z-10 px-6 md:px-[100px] pt-[100px] max-w-4xl">
    <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
      Online Shopping
    </h1>
    <h3 className="text-pink-300 text-2xl md:text-3xl font-semibold mt-2 drop-shadow">
      Landing Page
    </h3>
    <p className="text-gray-200 mt-4 max-w-lg text-base md:text-lg leading-relaxed">
      Discover the best deals and shop your favorite products from the comfort of your home. 
      Quality and convenience delivered.
    </p>
    <button
      onClick={() => navigate('/contact')}
      className="mt-8 inline-block bg-white text-pink-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
    >
      Contact Us
    </button>
  </div>
</div>


      {/* Hero Section */}
         <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Style</h1>
        <p className="text-xl mb-8">Premium men's clothing for every occasion</p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Shop The Collection
        </button>
      </div>
    </section>


      {/* Featured Products */}
  <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.slice(0, 4).map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          // Optional: link handled inside ProductCard, or remove this line
        />
      ))}
    </div>
    <div className="text-center mt-8">
      <button 
        onClick={() => navigate('/products')}
        className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
      >
        View All Products
      </button>
    </div>
  </div>
</section>


      {/* Category Banners */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg h-48 cursor-pointer" onClick={() => navigateTo('/categories/tops')}>
              <img 
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
                alt="Tops" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-bold bg-transparent border-2 border-white px-6 py-2 hover:bg-white hover:text-gray-900 transition duration-300">
                  Tops
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-48 cursor-pointer" onClick={() => navigateTo('/categories/bottoms')}>
              <img 
                src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Bottoms" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-bold bg-transparent border-2 border-white px-6 py-2 hover:bg-white hover:text-gray-900 transition duration-300">
                  Bottoms
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-48 cursor-pointer" onClick={() => navigateTo('/categories/accessories')}>
              <img 
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Accessories" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl font-bold bg-transparent border-2 border-white px-6 py-2 hover:bg-white hover:text-gray-900 transition duration-300">
                  Accessories
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.slice(2, 6).map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => navigateTo(product.link)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Style Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <BlogCard 
                key={blog.id} 
                blog={blog}
                onClick={() => navigateTo(blog.link)}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
           onClick={() => navigate('/blogs')}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Read All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Style Community</h2>
          <p className="mb-8 max-w-2xl mx-auto">Get 10% off your first order and exclusive style tips</p>
          <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-l-lg w-full sm:w-auto sm:flex-grow text-gray-900 focus:outline-none"
            />
            <button 
              onClick={() => navigateTo('https://www.youtube.com/@MOHACarab-mv5jx')}
              className="bg-white text-gray-900 px-6 py-3 rounded-r-lg hover:bg-gray-200 transition duration-300 mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;