export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => setSelectedCategory("all")}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selectedCategory === "all"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
            selectedCategory === cat
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
