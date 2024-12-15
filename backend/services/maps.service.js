const captainModel = require('../models/captain.model');
const axios = require("axios");

// Geocode an address to latitude and longitude using Nominatim (OSM)
module.exports.getAddressCoordinate = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}&addressdetails=1&limit=1`;

  try {
    const response = await axios.get(url);
    if (response.data && response.data.length > 0) {
      const location = response.data[0];
      return {
        ltd: location.lat,
        lng: location.lon,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get distance and time between two coordinates using OSRM
module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const url = `http://router.project-osrm.org/route/v1/driving/${encodeURIComponent(
    origin.lng
  )},${encodeURIComponent(origin.ltd)};${encodeURIComponent(
    destination.lng
  )},${encodeURIComponent(
    destination.ltd
  )}?overview=false&steps=true&geometries=geojson`;

  try {
    const response = await axios.get(url);
    if (response.data.routes && response.data.routes.length > 0) {
      const route = response.data.routes[0];
      return {
        distance: route.distance, // Distance in meters
        duration: route.duration, // Duration in seconds
      };
    } else {
      throw new Error("No routes found");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Get autocomplete suggestions for a query using Nominatim (OSM)
module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("Query is required");
  }

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    input
  )}&addressdetails=1&limit=5`;

  try {
    const response = await axios.get(url);
    if (response.data && response.data.length > 0) {
      return response.data
        .map((prediction) => prediction.display_name)
        .filter((value) => value);
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Get captains within a given radius of a location using geospatial query in MongoDB
module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
  // radius in km
  const captains = await captainModel.find({
    location: {
      $geoWithin: {
        $centerSphere: [[lng, ltd], radius / 6371], // Convert km to radians
      },
    },
  });

  return captains;
};
