import React, { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch weather by city
  const getWeatherByCity = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      setWeather(null);

      //Geocoding API (city → lat/lon)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      //Weather API
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        country,
        ...weatherData.current_weather,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      getWeatherByCity(city.trim());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">🌤 Check Weather Here...</h1>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="px-3 py-2 border rounded-lg w-64 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Weather Card */}
      {weather && (
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">
            {weather.city}, {weather.country}
          </h2>
          <p className="text-3xl font-bold">{weather.temperature} °C</p>
          <p className="text-gray-600">💨 {weather.windspeed} m/s</p>
          <p className="text-gray-600">
            ⏰ {new Date(weather.time).toLocaleString()}
          </p>
          <p className="text-gray-600">Weather Code: {weather.weathercode}</p>
        </div>
      )}
    </div>
  );
}
