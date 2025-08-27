import React, { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false); // data loaded
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // even on error, stop loading
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          <span className="ml-4 text-blue-500 font-medium">
            Loading posts...
          </span>
        </div>
      ) : (
        <ul className="max-w-2xl mx-auto space-y-4">
          {posts.slice(0, 5).map((post) => (
            <li
              key={post.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
