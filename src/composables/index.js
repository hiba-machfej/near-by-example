import { useState } from 'react';
import { getRecords, getRecordById } from '../services';

export const useContent = name => {
  const [records, setRecords] = useState();
  const [record, setRecord] = useState();

  const [loading, setLoading] = useState('');

  const getResult = async name => {
    setLoading('loading');
    const result = await getRecords(name);
    // console.log(result);
    setLoading('ready');

    setRecords(result);
  };
  const getRecord = async (name, id) => {
    setLoading('loading');
    const result = await getRecordById(name, id);
    // console.log(result);
    setLoading('ready');

    setRecord(result);
  };

  return {
    loading,
    getResult,
    getRecord,
    record,
    records
  };
};
