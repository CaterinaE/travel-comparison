import axios from 'axios';

export const getTransportData = async (departure, arrival) => {
  const apiKey = 'YOUR_TRANSPORT_API_KEY';
  const url = `https://api.transportapi.com/v3/uk/train/journey/from/${departure}/to/${arrival}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching transport data', error);
    return null;
  }
};
