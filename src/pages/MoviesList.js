import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { MoviesTable } from '../components/tables/MoviesTable';
import { siteRoutes } from '../constants/constants';
import { getMovies } from '../api/Api';

export const MoviesListPage = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterYear, setFilterYear] = useState();

  const onChange = date => {
    setFilterYear(date);
  };

  const fetchMovies = async params => {
    setIsLoading(true);
    try {
      const moviesData = await getMovies(params);
      setMovies(moviesData);
    } catch (error) {
      console.error('Error fetching movies from API:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToForm = () => {
    navigate(siteRoutes.FORM);
  };

  useEffect(() => {
    fetchMovies(filterYear ? { year: dayjs(filterYear).year() } : {});
  }, [filterYear]);

  return (
    <div className='flex flex-col gap-6 md:p-4'>
      <div className='flex justify-between'>
        <h1 className='text-xl lg:text-2xl font-semibold'>Listado de películas</h1>
        <PrimaryButton text='Agregar película' onClickHandler={navigateToForm} />
      </div>
      <main className='flex flex-col gap-4'>
        <div className='flex items-center gap-3 w-full flex-wrap'>
          <label className='text-xs uppercase font-semibold text-sky-600 mb-1'>
            Filtro por año
          </label>
          <div className='w-44'>
            <DatePicker
              onChange={onChange}
              className='w-full'
              picker='year'
              placeholder='Selecciona un año'
              value={filterYear}
            />
          </div>
        </div>
        <main>{isLoading ? <p>Loading...</p> : <MoviesTable movies={movies} />}</main>
      </main>
    </div>
  );
};
