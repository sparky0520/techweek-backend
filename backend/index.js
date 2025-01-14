const express = require("express");
const axios = require("axios"); // For making API calls
const bodyParser = require("body-parser"); // To parse req.body

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// OpenWeather API key (replace with your actual API key)
const OPEN_WEATHER_API_KEY = "c9c8b539744f9795f6c9dac4bc609495";

// Endpoint to handle requests
app.post("/weather", async (req, res) => {
  try {
    const { city } = req.body; // Extract the city name from req.body
    if (!city) {
      return res
        .status(400)
        .json({ error: "City name is required in req.body.city" });
    }
    console.log("\n\n");
    console.log("Received request for city:", city); // Print the incoming city name
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
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
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
