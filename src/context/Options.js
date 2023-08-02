import React, { createContext, useState, useEffect, useContext } from 'react';

import { siteRoutes } from '../constants/constants';
import { getOptions } from '../api/Api';

const OptionsContext = createContext();

export const OptionsProvider = ({ children }) => {
  const [options, setOptions] = useState([]);

  const fetchOptionsFromAPI = async () => {
    try {
      const optionsData = await getOptions();
      // Logic to remove Rent a movie option
      setOptions(optionsData.filter(option => option.path !== siteRoutes.RENT_MOVIE));
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
