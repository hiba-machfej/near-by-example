import axios from 'axios';
import env from 'react-dotenv';

export const getRecords = async () => {
  const baseURL = `https://v1.nocodeapi.com/hiba/airtable/${env.APP_API_KEY}?tableName=as&fields=title`;
  // let config = {
  //   headers: {
  //     Authorization: `Bearer keyb2fgLXNWaAl6xr`,
  //   },
  // };

  try {
    const response = await axios.get(baseURL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
