import React, { useState } from 'react';
import { searchFlights } from '../api/flightAPI';

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [flights, setFlights] = useState([]);

  const handleSearch = async () => {
    const results = await searchFlights(origin, destination, departureDate);
    setFlights(results || []);
  };


 

  
  return (
    <div>
      <h2>Search Flights</h2>
      <input
        type="text"
        placeholder="Origin (e.g., LHR)"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination (e.g., JFK)"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.itineraries[0].segments[0].departure.iataCode} →{' '}
            {flight.itineraries[0].segments[0].arrival.iataCode}: £
            {flight.price.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearch;
