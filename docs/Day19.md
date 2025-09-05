# Day 19 - Loading & Error States

## Goal

Learn how to handle **loading**, **error**, and **success states** while fetching data from an API.

We also fetch **5 photos** from JSONPlaceholder to practice showing **real data** in a minimal Tailwind-styled layout.

---

## Key Concepts

1. **Loading State**  
   Show a loading indicator while waiting for the API response.

2. **Error State**  
   Catch errors and display meaningful messages if the fetch fails.

3. **Success State**  
   Display the fetched data (images + titles) once available.

---

## Key Code Snippet

```jsx
useEffect(() => {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => setData(data.slice(0, 5))) // take only 5 items
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, [url]);
```

- `url` can be changed in the code to test real errors:

```js
const url = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"; // success
// const url = "https://jsonplaceholder.typicode.com/invalid-endpoint"; // error
```

---

## Rendering States (with Tailwind)

- **Loading:**

```jsx
{
  loading && <p className="text-center text-gray-500">Loading...</p>;
}
```

- **Error:**

```jsx
{
  error && <p className="text-center text-red-600">Error: {error}</p>;
}
```

- **Success Data:**

```jsx
<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {data.map((photo) => (
    <li
      key={photo.id}
      className="border rounded p-2 shadow hover:shadow-lg transition"
    >
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-full h-32 object-cover rounded mb-2"
      />
      <p className="text-sm font-medium">{photo.title}</p>
    </li>
  ))}
</ul>
```

---

## How to Test

1. **Success:** Use the working URL.
2. **Error:** Change the URL to an invalid endpoint in the code.
3. The component will show **loading → error/success → data** depending on the state.
