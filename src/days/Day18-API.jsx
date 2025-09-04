import { useEffect, useState } from "react";
import axios from "axios";

export default function Day18() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Option 1: Using fetch
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     });
  // }, []);

  // ✅ Option 2: Using axios
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📋 User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-3 rounded-lg shadow hover:bg-gray-50"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm">{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
