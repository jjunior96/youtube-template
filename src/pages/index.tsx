import styled from 'styled-components';

import { Card } from 'components/Card';

import { useProductsStore } from 'store/products';
import { useUsersStore } from 'store/users';

import { useProduct } from 'context/products';
import { useUser } from 'context/users';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
`;

function User() {
  // const { users, removeUser, addUser } = useUser();

  const {
    state: { users },
    actions: { addUser, removeUser }
  } = useUsersStore();

  console.log('users', users);

  return (
    <Card>
      <h2>Users</h2>

      <button
        onClick={() => addUser({ id: 1, name: 'User 01', address: 'Rua 01' })}
      >
        Add
      </button>
      <button onClick={() => removeUser(1)}>Remove</button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </Card>
  );
}

export default function Home() {
  const {
    state: { products },
    actions: { addProduct, removeProduct }
  } = useProductsStore();

  // const { products, addProduct, removeProduct } = useProduct();

  console.log('products', products);

  return (
    <Container>
      <Card>
        <h2>Products</h2>

        <button
          onClick={() => addProduct({ id: 1, name: 'Product 01', price: 12 })}
        >
          Add
        </button>
        <button onClick={() => removeProduct(1)}>Remove</button>

        {products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </Card>

      <User />
    </Container>
  );
}
