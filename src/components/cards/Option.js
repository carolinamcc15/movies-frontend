import { useState } from 'react';

import { getOptionIcon } from '../../utils/utils';
import { ToggleButton } from '../buttons/ToggleButton';

export const OptionCard = ({ option, onToggle }) => {
  const [toggleValue, setToggleValue] = useState(!option.disabled);

  const updateToggle = () => {
    try {
      onToggle(option.id);
      setToggleValue(!toggleValue);
    } catch (error) {}
  };

  return (
    <article className='flex items-center bg-white shadow-md px-4 py-6 gap-4 rounded-sm'>
      <div className='flex items-center text-3xl md:text-5xl'>{getOptionIcon(option.path)}</div>
      <div className='w-full flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold truncate'>{option.name}</h2>
          <ToggleButton active={toggleValue} onToggle={updateToggle} />
        </div>
        <p className='text-xs text-gray-500'>{toggleValue ? 'Habilitada' : 'Deshabilitada'}</p>
      </div>
    </article>
  );
};
