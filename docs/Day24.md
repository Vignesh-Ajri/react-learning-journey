# Local Storage in Web Development

## 🌐 What is Local Storage?

- Local Storage is a **Web Storage API** provided by browsers.
- It allows developers to **store key–value pairs** in a web browser.
- Data stored in Local Storage **persists even after refreshing or closing the browser** (until explicitly cleared).
- Capacity: Around **5MB** per domain (varies by browser).

---

## ⚡ Features

- Stores **string data only** (you need to `JSON.stringify` objects).
- Data is **synchronous** (blocking).
- Data is stored **per domain** (same-origin policy).
- Data never expires automatically (unlike cookies with expiry).

---

## 📦 Common Methods

### 1. Save Data

```js
localStorage.setItem("key", "value");
```

### 2. Get Data

```js
const value = localStorage.getItem("key");
console.log(value); // "value"
```

### 3. Remove Specific Data

```js
localStorage.removeItem("key");
```

### 4. Clear All Data

```js
localStorage.clear();
```

---

## 🛠 Storing Objects / Arrays

Since Local Storage only stores strings, you must convert objects or arrays using `JSON.stringify` and `JSON.parse`.

```js
// Save an array
const movies = ["Inception", "Interstellar", "The Dark Knight"];
localStorage.setItem("movies", JSON.stringify(movies));

// Retrieve the array
const savedMovies = JSON.parse(localStorage.getItem("movies"));
console.log(savedMovies); // ["Inception", "Interstellar", "The Dark Knight"]
```

---

## 🎬 Example: Favorites System

```js
// Add to favorites
function addFavorite(movieId) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(movieId)) {
    favorites.push(movieId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

// Remove from favorites
function removeFavorite(movieId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter((id) => id !== movieId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
```

---

## 🔒 Limitations & Security

- Not secure for sensitive information (like passwords, tokens).
- Data is **accessible via JavaScript**, so vulnerable to **XSS attacks**.
- Limited storage (about 5MB).
- Synchronous → may block main thread if storing large data.

---

## ✅ When to Use Local Storage

- Saving **user preferences** (theme, language).
- Storing **non-sensitive app state** (favorites, cart items).
- Caching small amounts of **non-sensitive data** for performance.

---

## ❌ When _Not_ to Use

- Storing **sensitive data** (tokens, passwords, personal info).
- Large data storage (prefer IndexedDB or server-side DB).
- For communication across domains (use cookies or server-side sessions).

---

✍️ **Summary**:
Local Storage is a simple, persistent storage solution in the browser for **small, non-sensitive data**. Always serialize/deserialize objects using `JSON.stringify` and `JSON.parse`.
