const API_URL = "http://localhost:5000/posts";

// Get all posts
export const fetchPosts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

// Create a new post
export const createPost = async (post) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...post,
      id: Date.now(),
      date: post.date || new Date().toISOString().split("T")[0],
    }),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
};

// Update an existing post
export const updatePost = async (post) => {
  const res = await fetch(`${API_URL}/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!res.ok) throw new Error("Failed to update post");
  return res.json();
};

// Delete a post
export const deletePost = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return true;
};
