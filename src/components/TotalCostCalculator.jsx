const TotalCostCalculator = ({ flightPrice, transportCost }) => {
    return (
      <div>
        <h2>Total Travel Cost</h2>
        <p>Flight: £{flightPrice}</p>
        <p>Transport: £{transportCost}</p>
        <p><strong>Total: £{flightPrice + transportCost}</strong></p>
      </div>
    );
  };
  
  export default TotalCostCalculator;
  