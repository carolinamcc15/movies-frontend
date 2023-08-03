import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { siteRoutes } from '../constants/constants';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(siteRoutes.MOVIES);
  };

  return (
    <div className='h-full flex flex-col gap-5 items-center justify-center col-span-full'>
      <h1 className='text-6xl text-sky-500 font-bold animate-bounce'>404</h1>
      <p className='text-xl text-gray-500'>Page not found</p>
      <PrimaryButton text='Go to home page' onClickHandler={navigateToHome} />
    </div>
  );
};
