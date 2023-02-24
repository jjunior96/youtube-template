import { useUsersStore } from 'store/users';

export default function Home() {
  const {
    state: { users },
    actions: { addUser, removeUser }
  } = useUsersStore();

  console.log(users);

  return (
    <>
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
    </>
  );
}
