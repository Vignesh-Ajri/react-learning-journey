# Day 21: Weather App

## Goal

Mini React app to show weather by searching a city.

## Features

- Search city → get weather
- Free **Open-Meteo API** (no signup, no key)
- Shows: Temperature, Wind, Time, Weather code
- Handles loading & errors
- Tailwind UI

## APIs

1. **Geocoding** (City → Lat/Lon)  
   `https://geocoding-api.open-meteo.com/v1/search?name=CityName`

2. **Weather** (Lat/Lon → Weather)  
   `https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true`

## Flow

City → Geocoding API → Get lat/lon → Weather API → Show results
