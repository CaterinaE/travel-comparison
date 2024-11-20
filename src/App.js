import React from 'react';
import FlightSearch from './components/FlightSearch'; // Adjust path if needed

const App = () => {
  return (
    <div>
      <header>
        <h1>Cheapest Travel Finder</h1>
      </header>
      <main>
        <FlightSearch />
      </main>
    </div>
  );
};

export default App;
