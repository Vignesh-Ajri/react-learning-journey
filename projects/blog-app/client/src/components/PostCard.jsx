import { Edit2, Trash2, Calendar, User, Tag } from "lucide-react";

export default function PostCard({
  post,
  openViewModal,
  openModal,
  handleDelete,
}) {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      {post.image && (
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span className="inline-flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span className="capitalize">{post.category}</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => openViewModal(post)}
              className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 p-2 rounded-lg transition-colors"
            >
              Read More
            </button>
            <button
              onClick={() => openModal(post)}
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 p-2 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
