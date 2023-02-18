'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center' }}>
      <p>Something went wrong!</p>
      <pre>{error.message}</pre>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
