import MovieForm from '../components/MovieForm';

export const MoviesFormPage = () => {
  return (
    <div className='flex flex-col gap-8 md:p-4'>
      <h1 className='text-2xl font-semibold text-center'>Crea una película</h1>
      <MovieForm />
    </div>
  );
};
