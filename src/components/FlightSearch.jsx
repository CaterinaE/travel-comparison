const axios = require('axios');

const searchFlights = async () => {
  const url = "https://sky-scanner3.p.rapidapi.com/flights/search-multi-city";
  const headers = {
    "x-rapidapi-key": "8fe764d300mshbb40fea542dafb4p11ace8jsn712739cdfaf4",
    "x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
    "Content-Type": "application/json"
  };
  const data = {
    market: "US",
    locale: "en-US",
    currency: "USD",
    adults: 1,
    children: 0,
    infants: 0,
    cabinClass: "economy",
    stops: ["direct", "1stop", "2stops"],
    sort: "cheapest_first",
    airlines: [-32753, -32695],
    flights: [
      {
        fromEntityId: "LHR",
        toEntityId: "DUB",
        departDate: "2024-12-22"
      },
      {
        fromEntityId: "PARI",
        toEntityId: "MSYA",
        departDate: "2024-12-28"
      }
    ]
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.data); // Process the API response
  } catch (error) {
    console.error("Error fetching flight data:", error.message);
  }
};

searchFlights();
