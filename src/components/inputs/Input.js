import React from 'react';

const Input = ({ id, label, placeholder, register, error, type = 'text', defaultValue = '' }) => {
  const focusColor = error ? 'border-red-700' : 'focus:border-sky-300';
  const labelColor = error ? 'text-red-700' : 'text-sky-600';

  return (
    <div className='w-full'>
      <label htmlFor={id} className={`text-xs uppercase font-semibold ${labelColor}`}>
        {label}
      </label>
      <input
        type={type}
        min={1}
        defaultValue={defaultValue}
        id={id}
        placeholder={placeholder}
        className={`text-primary-500 mt-1 bg-primary-100 appearance-none rounded w-full py-3 px-3 leading-tight focus:outline-none focus:border-2 border-2 placeholder:font-light placeholder:text-gray-600 ${focusColor}`}
        {...register}
      />
      {error && <p className='text-sm text-red-700 mt-1'>{error}</p>}
    </div>
  );
};

export default Input;
