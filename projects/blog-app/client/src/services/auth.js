const BASE_URL = "http://localhost:5000/users";

// Login
export async function login(email, password) {
  const res = await fetch(`${BASE_URL}?email=${email}&password=${password}`);
  const data = await res.json();

  if (data.length > 0) {
    const user = data[0];
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } else {
    throw new Error("Invalid credentials");
  }
}

// Register
export async function register({ name, email, password }) {
  // check if user already exists
  const checkRes = await fetch(`${BASE_URL}?email=${email}`);
  const existing = await checkRes.json();
  if (existing.length > 0) {
    throw new Error("Email already registered");
  }

  const newUser = { name, email, password };
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  if (!res.ok) throw new Error("Registration failed");

  return res.json();
}

// Get logged in user
export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Logout
export function logout() {
  localStorage.removeItem("user");
}
