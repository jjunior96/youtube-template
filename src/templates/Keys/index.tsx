import { useEffect, useState } from 'react';

import axios from 'axios';
import { Review } from 'src/mocks-ok/types';
import { BASE_URL } from 'src/mocks/handlers/api/products';

import * as S from './styles';

const data = [
  { id: 1, name: 'Junior' },
  { id: 2, name: 'João' },
  { id: 3, name: 'Rafael' },
  { id: 4, name: 'Ivan' },
  { id: 5, name: 'Emanoel' }
];

export default function Keys() {
  // console.log({ users });

  // const [sort, setSort] = useState('asc');

  // const sortedData = data.sort(() => (sort === 'asc' ? -1 : 1));

  // const handleSort = useCallback(() => {
  //   setSort(sort === 'asc' ? 'desc' : 'asc');
  // }, [sort]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleSort();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [handleSort]);

  const [products, setProducts] = useState<
    { id: string; name: string; bio: string }[] | null
  >(null);

  console.log({ products });

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then(setProducts);
  };

  return (
    <S.Container key={1}>
      <h2>React Keysss</h2>

      <button onClick={handleGetReviews}>Load reviews</button>

      {products?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      {/* {sortedData.map((person, index) => (
        <button key={index}>{person.name}</button>
      ))} */}

      {/* {sortedData.map((person) => (
        <button key={person.id}>{person.name}</button>
      ))} */}
    </S.Container>
  );
}
