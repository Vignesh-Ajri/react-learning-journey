import { X, Edit2, User, Calendar, Tag } from "lucide-react";

export default function ViewPostModal({
  isViewModalOpen,
  selectedPost,
  closeViewModal,
  openModal,
}) {
  if (!isViewModalOpen || !selectedPost) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Post Details</h2>
          <button
            onClick={closeViewModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {selectedPost.image && (
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1">
              <User className="w-4 h-4" />
              {selectedPost.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {selectedPost.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span className="capitalize">{selectedPost.category}</span>
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedPost.title}
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6 italic">
              {selectedPost.excerpt}
            </p>
            <div className="text-gray-700 whitespace-pre-wrap">
              {selectedPost.content}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
            <button
              onClick={() => {
                closeViewModal();
                openModal(selectedPost);
              }}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              <Edit2 className="w-4 h-4" />
              Edit Post
            </button>
            <button
              onClick={closeViewModal}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
