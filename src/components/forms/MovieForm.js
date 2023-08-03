import { DatePicker, notification } from 'antd';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

import { createMovie } from '../../api/Api';
import Input from '../inputs/Input';

const MovieForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
    watch,
  } = useForm({mode: "onChange"});
  const watchedFields = watch();

  const [api, contextHolder] = notification.useNotification();

  const [selectedDate, setSelectedDate] = useState();
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const openNotification = (message, type = 'info') => {
    api[type]({
      message,
      placement: 'top',
    });
  };

  const onChange = date => {
    setSelectedDate(date);
  };

  const resetForm = () => {
    reset();
    setSelectedDate(undefined);
  };

  const onSubmit = async data => {
    try {
      if (selectedDate && isValid) {
        const reqBody = { ...data, date: selectedDate };
        await createMovie(reqBody);
        openNotification('La película fue guardada correctamente', 'success');
        resetForm();
      }
    } catch (e) {
      openNotification('La película no pudo ser guardada', 'error');
    }
  };

  React.useEffect(() => {
    if (selectedDate && isValid) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [watchedFields, selectedDate, isValid]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-[650px] m-auto flex flex-col gap-5'
    >
      {contextHolder}
      <Input
        type='text'
        label='Nombre *'
        placeholder='Titanic'
        register={{
          ...register('name', {
            required: 'El nombre es requerido',
            maxLength: { value: 255, message: 'Has sobrepasado el máximo de 255 caracteres' },
          }),
        }}
        error={errors.name?.message}
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <Input
          type='number'
          min='1'
          label='Presupuesto *'
          placeholder='200000000'
          register={{
            ...register('budget', {
              min: 1,
              required: 'El presupuesto es requerido',
              pattern: { value: /^\d+$/, message: 'La duración debe ser un número entero' },
            }),
          }}
          error={errors.budget?.message}
        />
        <Input
          type='number'
          min='1'
          label='Duración (minutos) *'
          placeholder='120'
          register={{
            ...register('duration', {
              min: 1,
              required: 'La duración es requerida',
              pattern: { value: /^\d+$/, message: 'La duración debe ser un número entero' },
            }),
          }}
          error={errors.duration?.message}
        />
      </div>
      <div className='w-full flex flex-col'>
        <label className='text-xs uppercase font-semibold text-sky-600 mb-2'>
          Fecha de estreno *
        </label>
        <DatePicker
          onChange={onChange}
          value={selectedDate}
          allowClear={false}
          showToday={false}
          format='MM/DD/YYYY'
          required
          placeholder='Selecciona una fecha'
          rootClassName='p-2.5'
        />
      </div>
      <button
        type='submit'
        disabled={isButtonDisabled}
        className='px-6 py-2 bg-sky-500 font-semibold text-sm tracking-wider whitespace-nowrap text-white uppercase rounded-md border-2 border-transparent cursor-pointer hover:bg-primary-700 transform enabled:hover:scale-[1.01] disabled:hover:scale-1 transition duration-300 ease-in-out hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed'
      >
        Crear
      </button>
    </form>
  );
};

export default MovieForm;
