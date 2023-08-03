import MovieForm from '../components/MovieForm';

export const MoviesFormPage = () => {
  return (
    <main className=' h-full flex items-center justify-center'>
      <div className='flex flex-col gap-8 md:p-4'>
        <h1 className='text-2xl font-semibold w-full max-w-[650px] m-auto'>Crea una película</h1>
        <MovieForm />
      </div>
    </main>
  );
};
