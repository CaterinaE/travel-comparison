// flightAPI.js
import axios from 'axios';

const searchFlights = async (accessToken) => {
  try {
    const response = await axios.get(
      'https://test.api.amadeus.com/v2/shopping/flight-offers',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          originLocationCode: 'LON', // Example: London
          destinationLocationCode: 'NYC', // Example: New York
          departureDate: '2024-12-01',
          adults: 1,
        },
      }
    );
    return response.data; // Return flight search data
  } catch (error) {
    console.error('Error searching flights:', error);
    throw error;
  }
};

// Export the function for use in other files
export { searchFlights };
