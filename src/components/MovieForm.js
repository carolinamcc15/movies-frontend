import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import React from 'react';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const MovieForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    // Handle form submission with validated data
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label>Nombre *</Label>
        <Input
          type='text'
          name='name'
          {...register('name', {
            required: 'El nombre es requerido',
            maxLength: { value: 255, message: 'Has sobrepasado el máximo de 255 caracteres' },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </FormField>
      <FormField>
        <Label>Fecha de estreno *</Label>
        <Input type='date' {...register('date', { required: 'La fecha es requerida' })} />
        {errors.date && <p>{errors.date.message}</p>}
      </FormField>
      <FormField>
        <Label>Duración (minutos) *:</Label>
        <Input
          type='number'
          {...register('duration', {
            required: 'La duración es requerida',
            pattern: { value: /^\d+$/, message: 'La duración debe ser un número entero' },
          })}
        />
        {errors.duration && <p>{errors.duration.message}</p>}
      </FormField>
      <FormField>
        <Label>Presupuesto *</Label>
        <Input
          type='number'
          step='0.01'
          {...register('budget', {
            required: 'El presupuesto es requerido',
          })}
        />
        {errors.budget && <p>{errors.budget.message}</p>}
      </FormField>
      <Button onClick={onSubmit}>Guardar</Button>
    </FormContainer>
  );
};

export default MovieForm;
