import { useEffect, useState } from 'react';

export const INITIAL_TIME = 60; // 60 seconds

export const useTimer = (initialTime = INITIAL_TIME) => {
  const [time, setTime] = useState(
    initialTime >= 0 ? initialTime : INITIAL_TIME
  );

  const handleReset = () => {
    setTime(0);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (time === 0) return;

      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [time]);

  return {
    time,
    handleReset
  };
};
