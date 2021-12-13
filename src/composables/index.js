import { useState, useEffect } from 'react';
import { getRecords } from '../services';

export const useContent = async () => {
  const [records, setRecords] = useState();
  // const [error, setError] = useState();
  // const [isError, setIsError] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const getResult = async () => {
    const result = await getRecords();
    console.log(result);
    setRecords(result);
  };

  useEffect(() => {
    getResult();
  }, []);

  return {
    // error,
    // isLoading,
    // isError,
    // isSuccess,
    records
  };
};
