import { notification } from 'antd';

import { useOptionsContext } from '../context/Options';
import { OptionCard } from '../components/cards/Option';
import { toggleOptionDisabled } from '../api/Api';
import { siteRoutes } from '../constants/constants';

export const ManageOptionsPage = () => {
  const { options, fetchOptions } = useOptionsContext();

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message, type = 'info') => {
    api[type]({
      message,
      placement: 'top',
      className: 'text-sm',
    });
  };

  const onToggle = async optionId => {
    try {
      await toggleOptionDisabled(optionId);
      // To update the sidebar menu
      fetchOptions();
    } catch (error) {
      openNotification('No se pudo modificar el valor', 'error');
    }
  };

  return (
    <div className=' h-full flex items-center justify-center'>
      <div className='flex flex-col gap-8 md:p-4 w-full max-w-[800px] m-auto'>
        {contextHolder}
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-semibold '>Administrar opciones</h1>
          <p>En esta sección puedes habilitar o deshabilitar las opciones disponibles en el menú</p>
        </div>
        <main>
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {options
              .filter(option => option.path !== siteRoutes.MANAGE_OPTIONS)
              .map(option => (
                <OptionCard key={option.id} option={option} onToggle={onToggle} />
              ))}
          </section>
        </main>
      </div>
    </div>
  );
};
