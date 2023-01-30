import { Card } from 'components/Card';

import { useProductsStore } from 'store/products';

import { useProduct } from 'context/products';

export const Products = () => {
  const { products, addProduct, removeProduct } = useProduct();

  // const {
  //   state: { products },
  //   actions: { addProduct, removeProduct }
  // } = useProductsStore();

  const product = { price: 10, id: 1, name: 'Product 01' };

  return (
    <Card>
      <h2>Products</h2>

      <button onClick={() => addProduct(product)}>Add</button>
      <button onClick={() => removeProduct(1)}>Remove</button>

      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </Card>
  );
};
