import { createContext, useCallback, useContext, useState } from 'react';

import { IUserContext, UserProviderProps, UserProps } from './types';

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const addUser = useCallback((user: UserProps) => {
    setUsers((prev) => [...prev, user]);
  }, []);

  const removeUser = useCallback(
    (userId: number) => {
      const newUsers = users.filter((user) => user.id !== userId);

      setUsers(newUsers);
    },
    [users]
  );

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        removeUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export const useUser = () => useContext(UserContext);
