import axios from 'axios';

export const getRecords = async name => {
  // const baseURL = `https://v1.nocodeapi.com/hiba/airtable/${process.env.REACT_APP_API_KEY}?tableName=${name}`;

  const baseURL = `https://api.airtable.com/v0/appARo2x4d5FxgzRz/${name}?view=reviewed`;

  let config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  };

  try {
    const response = await axios.get(baseURL, config);
    console.log(response.data.records);
    return response.data.records.sort((a, b) => a.fields.order - b.fields.order);
  } catch (error) {
    console.error(error);
  }
};

export const getRecordById = async (name, id) => {
  // const baseURL = `https://v1.nocodeapi.com/hiba/airtable/jEmoFPVFfFpjJkum?tableName=${name}&id=${id}`;
  const baseURL = `https://api.airtable.com/v0/appARo2x4d5FxgzRz/${name}/${id}`;
  console.log(baseURL);

  console.log(process.env.REACT_APP_API_KEY);
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  };

  try {
    const response = await axios.get(baseURL, config);
    console.log(response.data);
    return response.data.fields;
  } catch (error) {
    console.error(error);
  }
};
