import axios from 'axios';

const API_ENDPOINT_MOVIES = 'http://localhost:3010/api/movies';
const API_ENDPOINT_OPTIONS = 'http://localhost:3010/api/options';

const handleSubmit = async formData => {
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

const getOptions = async () => {
  try {
    const response = await axios.get(API_ENDPOINT_OPTIONS);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleSubmit, getOptions };
