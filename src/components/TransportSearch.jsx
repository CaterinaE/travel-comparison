import React, { useState } from 'react';
import { getTransportData } from '../api/transportAPI';

const TransportSearch = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [routes, setRoutes] = useState([]);

  const handleSearch = async () => {
    const data = await getTransportData(departure, arrival);
    setRoutes(data?.routes || []);
  };

  return (
    <div>
      <h2>Transport Search</h2>
      <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} placeholder="From" />
      <input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} placeholder="To" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>{route.name} - £{route.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransportSearch;
