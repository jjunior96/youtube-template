import { useCallback, useEffect, useState } from 'react';

import * as S from './styles';

export default function Keys() {
  const data = [
    { id: 1, name: 'Junior' },
    { id: 2, name: 'João' },
    { id: 3, name: 'Rafael' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Emanoel' }
  ];

  const [sort, setSort] = useState('asc');

  const sortedData = data.sort(() => (sort === 'asc' ? -1 : 1));

  const handleSort = useCallback(() => {
    setSort(sort === 'asc' ? 'desc' : 'asc');
  }, [sort]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSort();
    }, 1000);

    return () => clearInterval(interval);
  }, [handleSort]);

  return (
    <S.Container key={1}>
      <h2>React Keys</h2>

      {/* {sortedData.map((person, index) => (
        <button key={index}>{person.name}</button>
      ))} */}

      {sortedData.map((person) => (
        <button key={person.id}>{person.name}</button>
      ))}
    </S.Container>
  );
}
