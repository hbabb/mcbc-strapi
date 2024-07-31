import useSWR from 'swr';
import axios from './axios';

const fetcher = url => axios.get(url).then(res => res.data);

/**
 * Custom hook to fetch data using SWR and axios.
 * @param {string} endpoint - The endpoint to fetch data from.
 * @returns {Object} An object containing the fetched data, error, and loading state.
 */
export const useData = (endpoint) => {
  // Use SWR to fetch data from the specified endpoint using the custom fetcher.
  const { data, error } = useSWR(endpoint, fetcher);

  // Return an object containing the fetched data, error, and loading state.
  // The loading state is determined by the absence of both error and data.
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
