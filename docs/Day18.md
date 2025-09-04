# 📅 Day 18 – API Integration (fetch / axios)

## 🎯 Goal

- Learn how to fetch data from an API in React using **fetch** and **axios**.
- Build a simple **User List Page** displaying data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

---

## 🛠 Implementation

### 1. Fetching with `fetch`

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setLoading(false);
    });
}, []);
```

### 2. Fetching with `axios`

```jsx
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setUsers(res.data);
      setLoading(false);
    })
    .catch((err) => console.error(err));
}, []);
```

---

## 📋 Example Output

Each user card shows:

- **Name**
- **Email**
- **City**

---

## 📝 Notes

- `fetch` is **built-in**:

  - Requires `.json()` to parse response.
  - Minimal features, needs manual error handling.

- `axios` is **external**:

  - Automatically parses JSON.
  - Better error handling & interceptors.
  - Cleaner syntax for requests.

- Used **`useEffect`** to fetch data on component mount (avoids infinite loops).
