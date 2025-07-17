const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-gray-500">{blog.date}</span>
        <h3 className="text-xl font-semibold text-gray-800 my-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <a href="#" className="text-primary hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default BlogCard;