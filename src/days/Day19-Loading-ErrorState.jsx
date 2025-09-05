import { useState, useEffect } from "react";

export default function PhotoFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Working URL: fetch first 5 photos
  const url = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";
  // const url = "https://jsonplaceholder.typicode.com/invalid-endpoint"; // <-- test error

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <div className="max-w-3xl mx-auto mt-10 font-sans">
      <h2 className="text-2xl font-bold text-center mb-6">Photo Fetcher</h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((photo) => (
          <li key={photo.id} className="border rounded p-2 shadow hover:shadow-lg transition">
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="text-sm font-medium">{photo.title}</p>
          </li>
        ))}
      </ul>

      {!loading && !error && data.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No data found.</p>
      )}
    </div>
  );
}
