export const fetchFlightPrices = async () => {
  const requestPayload = {
    market: 'US',
    locale: 'en-US',
    currency: 'USD',
    adults: 1,
    children: 0,
    infants: 0,
    cabinClass: 'economy',
    stops: ['direct', '1stop', '2stops'],
    sort: 'cheapest_first',
    airlines: [-32753, -32695], // Example airline IDs
    flights: [
      { fromEntityId: 'LHR', toEntityId: 'DUB', departDate: '2024-12-22' },
      { fromEntityId: 'PARI', toEntityId: 'MSYA', departDate: '2024-12-28' },
    ],
  };

  try {
    const response = await fetch('https://sky-scanner3.p.rapidapi.com/flights/search-multi-city', {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '8fe764d300mshbb40fea542dafb4p11ace8jsn712739cdfaf4', // Use your API key here
        'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestPayload),
    });

    const data = await response.json();
    return data.flightsSessionId; // Extract and return the session ID
  } catch (error) {
    throw new Error('Failed to initiate flight search');
  }
};
