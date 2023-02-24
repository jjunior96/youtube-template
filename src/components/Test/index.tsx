import { useState } from 'react';

// import axios from 'axios';

export const Test = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log(setData, setIsLoading, setError);

  // const handleFunction = async () => {
  //   try {
  //     setIsLoading(true);
  //     const result = await axios.get('https://api.com');

  //     setData(result.data);
  //   } catch (err) {
  //     setError('Error');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   handleFunction();
  // }, []);

  return (
    <>
      <h2>Title</h2>

      {isLoading && <p>Loading</p>}
      {!!error && <p>Error</p>}

      {!!data.length && <p>Data</p>}
    </>
  );
};
