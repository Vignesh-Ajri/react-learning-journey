import React, { useState } from "react";
import { Search, TrendingUp, Calendar, User, Eye, MessageCircle, Heart, ArrowRight } from "lucide-react";

// Hero Section - Simple and clean
const Hero = ({ isAuthenticated }) => (
  <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to BlogSite</h1>
      <p className="text-xl mb-8 text-blue-100">Share your thoughts with the world</p>
      
      {isAuthenticated ? (
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          Write a Blog
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Join Now
          </button>
          <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
            <Search className="w-4 h-4 inline mr-2" />
            Explore
          </button>
        </div>
      )}
    </div>
  </section>
);

// Featured Blog Card
const FeaturedBlog = ({ blog }) => (
  <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img
      className="w-full h-64 object-cover"
      src={blog.imageUrl}
      alt={blog.title}
    />
    <div className="p-6">
      <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">Featured</div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{blog.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{blog.excerpt}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{blog.author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </article>
);

// Blog Grid
const BlogGrid = ({ blogs }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogs.map((blog) => (
      <article
        key={blog.id}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
      >
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Calendar className="w-4 h-4" />
          {new Date(blog.date).toLocaleDateString()}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {blog.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{blog.author}</span>
          </div>
          
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors">
            Read →
          </button>
        </div>
      </article>
    ))}
  </div>
);

// Categories Sidebar
const Categories = ({ categories, onSelectCategory, selectedCategory }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Categories</h4>
    <div className="space-y-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${
            selectedCategory === cat
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
);

// Trending Section
const TrendingBlogs = ({ trending }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div className="flex items-center gap-2 mb-6">
      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Trending</h2>
    </div>
    
    <div className="space-y-4">
      {trending.map((blog, index) => (
        <div key={blog.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {index + 1}
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {blog.title}
            </h3>
            
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {blog.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                {blog.comments}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {blog.views}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Home Component
const Home = ({ isAuthenticated = false }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const featuredBlog = {
    id: "1",
    title: "Learn React with Tailwind CSS",
    excerpt: "A complete guide on React development styled with Tailwind CSS. Learn the fundamentals and build beautiful, responsive applications.",
    author: "Jane Doe",
    date: "2025-09-10",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  };

  const recentBlogs = [
    {
      id: "2",
      title: "Understanding JavaScript Closures",
      excerpt: "Closures are a fundamental concept in JavaScript that every developer should understand...",
      author: "John Smith",
      date: "2025-09-12",
    },
    {
      id: "3",
      title: "Styling React Apps with Tailwind CSS",
      excerpt: "Tailwind CSS makes styling easier and faster with utility-first approach...",
      author: "Anna Johnson",
      date: "2025-09-14",
    },
    {
      id: "4",
      title: "Deploying MERN Stack Applications",
      excerpt: "Learn how to deploy your MERN stack project effectively to production...",
      author: "Mike Brown",
      date: "2025-09-15",
    },
  ];

  const categories = ["Technology", "Lifestyle", "Health", "Travel", "Business"];

  const trendingBlogs = [
    {
      id: "5",
      title: "Top 10 VS Code Extensions for Developers",
      likes: 250,
      comments: 40,
      views: 1020,
    },
    {
      id: "6",
      title: "How to Build Responsive UIs with Tailwind",
      likes: 190,
      comments: 30,
      views: 900,
    },
    {
      id: "7",
      title: "Modern JavaScript Best Practices",
      likes: 165,
      comments: 25,
      views: 780,
    },
  ];

  const handleSelectCategory = (cat) => {
    setSelectedCategory(selectedCategory === cat ? null : cat);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 max-w-7xl mx-auto mt-18">
      {/* Hero Section */}
      <Hero isAuthenticated={isAuthenticated} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <Categories 
              categories={categories} 
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
            <TrendingBlogs trending={trendingBlogs} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Blog */}
            <div>
              <FeaturedBlog blog={featuredBlog} />
            </div>

            {/* Recent Blogs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Posts</h2>
              <BlogGrid blogs={recentBlogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;