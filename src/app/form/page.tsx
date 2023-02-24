'use client';

import { useFieldArray, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Minus } from 'phosphor-react';
import { z } from 'zod';

import * as S from './styles';

const billsSchema = z.array(
  z.object({
    name: z.string().min(2, 'Por favor, informe um descrição válida'),
    amount: z.number().positive('Por favor, informe um valor válido')
  })
);

const schema = z
  .object({
    name: z.string().min(3, 'Por favor, informe um nome válido'),
    bills: billsSchema
  })
  .refine((fields) => fields.bills.length > 0, {
    path: ['bills'],
    message: 'Por favor, informe pelo menos uma conta'
  });

type FormDataProps = z.infer<typeof schema>;

export default function Form() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    control
  } = useForm<FormDataProps>({
    mode: 'all',
    resolver: zodResolver(schema)
  });
  const { fields, append, remove } = useFieldArray({
    name: 'bills',
    control
  });

  console.log(errors);

  const handleFormSubmit = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <S.Container>
      <div>
        <h2>Form</h2>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            {...register('name')}
            type="text"
            placeholder="Informe seu nome"
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}

          {fields.map((field, index) => (
            <S.BillContainer key={field.id}>
              <div>
                <input {...register(`bills.${index}.name`)} type="text" />
                {errors?.bills && <p>{errors?.bills[index]?.name?.message}</p>}
              </div>

              <div>
                <input
                  {...register(`bills.${index}.amount`, {
                    valueAsNumber: true
                  })}
                  type="number"
                />
                {errors?.bills && (
                  <p>{errors?.bills[index]?.amount?.message}</p>
                )}
              </div>

              <button type="button" onClick={() => remove(index)}>
                <Minus />
              </button>
            </S.BillContainer>
          ))}

          <button
            type="button"
            className="add"
            onClick={() =>
              append({
                name: '',
                amount: 0
              })
            }
          >
            <Plus />
          </button>

          <p>{errors.bills?.message}</p>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </S.Container>
  );
}
