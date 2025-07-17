import { useState } from 'react';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const [blogs] = useState([
    { 
      id: 1, 
      title: 'Spring 2023 Men\'s Fashion Trends', 
      excerpt: 'Discover the essential styles for this season', 
      date: 'March 10, 2023', 
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Trends'
    },
    { 
      id: 2, 
      title: 'How to Build a Capsule Wardrobe', 
      excerpt: 'The minimalist approach to men\'s fashion', 
      date: 'February 22, 2023', 
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Style Tips'
    },
    { 
      id: 3, 
      title: 'Dress for Success: Office Attire Guide', 
      excerpt: 'Professional looks for every workplace', 
      date: 'January 15, 2023', 
      image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      category: 'Workwear'
    },
    { 
      id: 4, 
      title: 'Sustainable Fashion Choices', 
      excerpt: 'Eco-friendly clothing options for men', 
      date: 'December 5, 2022', 
      image: 'https://images.unsplash.com/photo-1600188769045-bc6025a019fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Sustainability'
    },
    { 
      id: 5, 
      title: 'Denim Care Guide', 
      excerpt: 'How to make your jeans last longer', 
      date: 'November 18, 2022', 
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Care Guide'
    },
    { 
      id: 6, 
      title: 'Seasonal Color Palettes', 
      excerpt: 'Best colors to wear each season', 
      date: 'October 30, 2022', 
      image: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Style Tips'
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Men's Fashion Blog</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the latest trends, style tips, and fashion advice for the modern man
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map(blog => (
            <BlogCard 
              key={blog.id} 
              blog={blog}
              onClick={() => window.location.href = `/blog/${blog.id}`}
            />
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button 
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 rounded ${currentPage === number ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {number}
                </button>
              ))}
              
              <button 
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;