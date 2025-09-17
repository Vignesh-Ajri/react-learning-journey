import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/Search";
import CategoryFilter from "../components/CategoryFilter";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import PostFormModal from "../components/Modal/PostFormModal";
import ViewPostModal from "../components/Modal/ViewPostModal";

// Import API functions
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "technology",
    excerpt: "",
    content: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
  });

  const categories = [
    "technology",
    "lifestyle",
    "travel",
    "food",
    "health",
    "business",
  ];

  // Fetch posts on mount
  useEffect(() => {
    loadPosts();
  }, []);

  // Filter posts
  useEffect(() => {
    let filtered = posts;
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }
    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory]);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchPosts();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(
        "Failed to load posts. Make sure JSON Server is running on port 3001."
      );
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedPost) {
        await updatePost({ ...formData, id: selectedPost.id });
      } else {
        await createPost(formData);
      }
      loadPosts();
      closeModal();
    } catch {
      alert("Failed to save post. Make sure JSON Server is running.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      await deletePost(id);
      loadPosts();
    } catch {
      alert("Failed to delete post. Make sure JSON Server is running.");
    }
  };

  const openModal = (post = null) => {
    if (post) {
      setSelectedPost(post);
      setFormData(post);
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    resetForm();
  };

  const openViewModal = (post) => {
    setSelectedPost(post);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedPost(null);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      category: "technology",
      excerpt: "",
      content: "",
      image: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header openModal={() => openModal()} />

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
            <p className="font-medium">Error loading posts</p>
            <p className="text-sm mt-1">{error}</p>
            <p className="text-sm mt-2">To run JSON Server:</p>
            <code className="block bg-red-100 p-2 rounded mt-1 text-xs">
              npm install -g json-server
              <br />
              json-server --watch db.json --port 3001
            </code>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found</p>
            <button
              onClick={() => openModal()}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Create your first post →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                openViewModal={openViewModal}
                openModal={openModal}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <PostFormModal
        isModalOpen={isModalOpen}
        selectedPost={selectedPost}
        formData={formData}
        setFormData={setFormData}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        categories={categories}
      />

      <ViewPostModal
        isViewModalOpen={isViewModalOpen}
        selectedPost={selectedPost}
        closeViewModal={closeViewModal}
        openModal={openModal}
      />
    </div>
  );
}
