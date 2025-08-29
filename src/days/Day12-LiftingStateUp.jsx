import { useState } from "react";

function TemperatureInput({ label, value, onChange }) {
  return (
    <div className="flex items-center gap-2 p-2">
      <label className="font-medium w-28">{label}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (val) => {
    setCelsius(val);
    setFahrenheit(val ? (val * 9) / 5 + 32 : "");
  };

  const handleFahrenheitChange = (val) => {
    setFahrenheit(val);
    setCelsius(val ? ((val - 32) * 5) / 9 : "");
  };

  return (
    <div className="mt-10 mx-auto w-96 border border-green-500 rounded-xl shadow-md p-6 bg-white text-center">
      <h1 className="text-2xl font-bold mb-6 text-green-700">
        Temperature Converter
      </h1>
      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}
