import { Button } from './button';

function getData() {
  return new Promise<{ name: string; id: number }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Junior'
        }
      ]);
    }, 3000);
  });
}

export default async function ProductsPage() {
  const products = await getData();

  return (
    <>
      <h2>Products</h2>

      {products?.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}

      <Button />
    </>
  );
}
