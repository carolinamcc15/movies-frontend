import axios from 'axios';
import { getQueryParamsString } from '../utils/utils';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3010';

const API_ENDPOINT_MOVIES = `${API_URL}/api/movies`;
const API_ENDPOINT_OPTIONS = `${API_URL}/api/options`;

const createMovie = async formData => {
  try {
    const parsedFormData = {
      ...formData,
      duration: parseInt(formData.duration),
      budget: parseInt(formData.budget),
    };

    const response = await axios.post(API_ENDPOINT_MOVIES, parsedFormData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    console.log('Data sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
};

const getMovies = async params => {
  try {
    const response = await axios.get(`${API_ENDPOINT_MOVIES}${getQueryParamsString(params)}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getOptions = async () => {
  try {
    const response = await axios.get(API_ENDPOINT_OPTIONS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const toggleOptionDisabled = async optionId => {
  try {
    const response = await axios.put(`${API_ENDPOINT_OPTIONS}/${optionId}/toggleDisabled`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getMovies, createMovie, getOptions, toggleOptionDisabled };
