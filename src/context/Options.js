import React, { createContext, useState, useEffect, useContext } from 'react';
import { getOptions } from '../api/Api';

const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState([]);

  const fetchOptionsFromAPI = async () => {
    try {
      const optionsData = await getOptions();
      setOptions(optionsData);
    } catch (error) {
      console.error('Error fetching options from API:', error);
    }
  };

  useEffect(() => {
    fetchOptionsFromAPI();
  }, []);

  const contextValue = {
    options,
    fetchOptions: fetchOptionsFromAPI,
  };

  return <OptionsContext.Provider value={contextValue}>{children}</OptionsContext.Provider>;
};

export const useOptionsContext = () => useContext(OptionsContext);
