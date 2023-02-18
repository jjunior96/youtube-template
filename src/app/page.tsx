'use client';

import { useEffect } from 'react';

export default function HomePage() {
  const handleError = () => {
    throw new Error('Algo deu errado');
  };

  useEffect(() => {
    // handleError();
  }, []);

  return (
    <>
      <h2>Home</h2>

      <button onClick={handleError}>Click</button>
    </>
  );
}
