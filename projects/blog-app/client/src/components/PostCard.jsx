import { Edit2, Trash2, Calendar, User, Tag } from "lucide-react";

export default function PostCard({ post, openViewModal, openModal, handleDelete }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
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
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="inline-flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span className="capitalize">{post.category}</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h2>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => openViewModal(post)}
              className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors"
            >
              Read More
            </button>
            <button
              onClick={() => openModal(post)}
              className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
