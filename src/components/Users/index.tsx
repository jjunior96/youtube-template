import { Card } from 'components/Card';

// import { useUsersStore } from 'store/users';

import { useUser } from 'context/users';

export const Users = () => {
  const { users, addUser, removeUser } = useUser();

  // const {
  //   state: { users },
  //   actions: { addUser, removeUser }
  // } = useUsersStore();

  const user = { address: 'Rua 01', id: 1, name: 'Junior' };

  return (
    <Card>
      <h2>Users</h2>

      <button onClick={() => addUser(user)}>Add</button>
      <button onClick={() => removeUser(1)}>Remove</button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </Card>
  );
};
