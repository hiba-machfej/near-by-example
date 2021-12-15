import { useState } from 'react';
import { getRecords } from '../services';

export const useContent = (name) => {
  const [records, setRecords] = useState();
 
  const [loading, setLoading] = useState('');

  const getResult = async (name) => {
    setLoading('loading')
    const result = await getRecords(name);
    console.log(result);
    setLoading('ready')

    setRecords(result);
  };

  return {
    loading,
    getResult,
    records
  };
};
