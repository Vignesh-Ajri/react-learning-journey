import { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";

const movies = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi" },
  { id: 2, title: "Interstellar", year: 2014, genre: "Sci-Fi" },
  { id: 3, title: "The Dark Knight", year: 2008, genre: "Action" },
];

export default function FavoriteMovies() {
  // ✅ Load from localStorage initially
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movieId) => {
    setFavorites((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  const favoriteMovies = movies.filter((m) => favorites.includes(m.id));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Movie Collection
      </h1>

      <div className="space-y-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{movie.title}</h3>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-gray-500">{movie.year}</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {movie.genre}
                  </span>
                </div>
              </div>

              <button
                onClick={() => toggleFavorite(movie.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  favorites.includes(movie.id)
                    ? "bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
                    : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                <Heart
                  size={16}
                  className={
                    favorites.includes(movie.id)
                      ? "fill-current text-red-600"
                      : ""
                  }
                />
                {favorites.includes(movie.id)
                  ? "Favorited"
                  : "Add to Favorites"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {favoriteMovies.length > 0 && (
        <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Star size={18} className="text-yellow-500 fill-current" />
            <h2 className="font-medium text-gray-800">Your Favorite Movies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {favoriteMovies.map((movie) => (
              <span
                key={movie.id}
                className="px-3 py-1 bg-red-50 text-red-800 text-sm rounded-full border border-red-200"
              >
                {movie.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
