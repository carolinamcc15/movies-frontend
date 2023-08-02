import { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { MoviesTable } from '../components/tables/MoviesTable';
import { getMovies } from '../api/Api';

export const MoviesListPage = () => {
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

  useEffect(() => {
    fetchMovies(filterYear ? { year: dayjs(filterYear).year() } : {});
  }, [filterYear]);

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-xl lg:text-2xl font-semibold'>Listado de películas</h1>
      <main>
        <DatePicker onChange={onChange} picker='year' value={filterYear} />
        <main>{isLoading ? <p>Loading...</p> : <MoviesTable movies={movies} />}</main>
      </main>
    </div>
  );
};
