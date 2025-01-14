const express = require("express");
const axios = require("axios"); // For making API calls
const bodyParser = require("body-parser"); // To parse req.body
const cors = require("cors"); // To enable CORS

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// OpenWeather API key (replace with your actual API key)
const OPEN_WEATHER_API_KEY = "c9c8b539744f9795f6c9dac4bc609495";

// Endpoint to handle requests
app.get("/weather", async (req, res) => {
  try {
    const { city, name } = req.query; // Extract the city name from req.body
    if (city.length < 1 || name.length < 1) {
      return res
        .status(400)
        .json({ error: "City name is required in req.body.city" });
    }
    console.log("\n\n");
    console.log(`Request received for city: ${city} by ${name}`); // Print the incoming city name
    console.log("\n");
    // Fetch weather data from OpenWeather API
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    const weatherData = weatherResponse.data;

    console.log("Weather Data:", weatherData); // Print the fetched weather data

    // Return the weather data as a response
    res.json({
      city: weatherData.name,
      country: weatherData.sys.country,
      temp: weatherData.main.temp,
      temp_min: weatherData.main.temp_min,
      temp_max: weatherData.main.temp_max,
      description: weatherData.weather[0].description,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: "City not found" });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while fetching weather data" });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
