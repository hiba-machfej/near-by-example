import axios from 'axios';

export const getRecords = async (name) => {
  const baseURL = `https://v1.nocodeapi.com/hiba/airtable/${process.env.REACT_APP_API_KEY}?tableName=${name}&fields=title`;
  console.log(baseURL);

  console.log(process.env.REACT_APP_API_KEY);

  try {
    const response = await axios.get(baseURL);
    console.log(response.data.records);
    return response.data.records;
  } catch (error) {
    console.error(error);
  }
};
