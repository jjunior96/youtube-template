'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

// import { useEffect } from 'react';

export default function HomePage() {
  // const handleError = () => {
  //   throw new Error('Algo deu errado');
  // };

  // useEffect(() => {
  // handleError();
  // }, []);

  const { handleSubmit, register } = useForm();

  const handleFormData = (data: any) => {
    console.log(data);

    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <h2>Home</h2>

      {/* <form onSubmit={handleSubmit(handleFormData)}>
        <input {...register('email')} type="text" />
        <input {...register('password')} type="text" />

        <button type="submit">Enviar</button>
      </form> */}

      {/* <button onClick={handleError}>Click</button> */}
    </>
  );
}
