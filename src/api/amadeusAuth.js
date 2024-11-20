import axios from 'axios';

const CLIENT_ID = 'L3cH5UwO748FgmTGwYTMZCWDDMOvND1o';  // Your API Key
const CLIENT_SECRET = 'VMyYPKIe8ClbYFMO';  // Your API Secret

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    console.log('Access Token:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching Amadeus access token:', error.response?.data || error.message);
  }
};
