import React from "react";
import WeatherApp from '../projects/WeatherApp'

export default function Day21() {
  return (
    <div className="bg-gray-50 p-5">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-4 mb-2">
        Day21 - A simple Weather app
      </h3>
      <WeatherApp />
    </div>
  );
}
