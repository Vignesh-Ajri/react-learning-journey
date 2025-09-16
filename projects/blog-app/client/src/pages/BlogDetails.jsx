import React from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

const BlogDetails = ({ blogId, onBack }) => {
  // Sample blog data - in real app, this would be fetched based on blogId
  const blogData = {
    id: "1",
    title: "Learn React with Tailwind CSS",
    author: "Jane Doe",
    date: "2025-09-10",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    category: "Technology",
    content: `
      <p>React has revolutionized the way we build user interfaces, and when combined with Tailwind CSS, it becomes an incredibly powerful tool for creating beautiful, responsive web applications. In this comprehensive guide, we'll explore how to effectively use these two technologies together.</p>
    `,
    likes: 245,
    comments: 32,
    isLiked: false,
    isBookmarked: false,
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      // Fallback for when onBack is not provided
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-20">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">
                {blogData.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {blogData.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold">{blogData.author}</span>
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(blogData.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{blogData.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Heart className="w-4 h-4" />
                <span>{blogData.likes}</span>
              </button>

              <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{blogData.comments}</span>
              </button>

              <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>

              <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </header>

          {/* Featured Image */}
          {blogData.imageUrl && (
            <div className="mb-8">
              <img
                src={blogData.imageUrl}
                alt={blogData.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Blog Content */}
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-p:leading-relaxed
                prose-a:text-blue-600 dark:prose-a:text-blue-400
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-code:text-blue-600 dark:prose-code:text-blue-400
                prose-code:bg-gray-100 dark:prose-code:bg-gray-700
                prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-100 dark:prose-pre:bg-gray-700
                prose-pre:border dark:prose-pre:border-gray-600
                prose-ul:text-gray-700 dark:prose-ul:text-gray-300
                prose-li:text-gray-700 dark:prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </article>

          {/* Author Bio Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {blogData.author}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Passionate developer and writer with over 5 years of
                  experience in React and modern web technologies. Loves sharing
                  knowledge and helping other developers grow in their careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
