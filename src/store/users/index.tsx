import { create } from 'zustand';

type UsersProps = {
  id: number;
  name: string;
  address: string;
};

type ActionsProps = {
  addUser: (user: UsersProps) => void;
  removeUser: (userId: number) => void;
};

type StoreProps = {
  state: {
    users: UsersProps[];
  };
  actions: ActionsProps;
};

export const useUsersStore = create<StoreProps>((set) => ({
  state: {
    users: []
  },
  actions: {
    addUser: (user) =>
      set((state) => ({
        state: { users: [...state.state.users, user] }
      })),
    removeUser: (userId) =>
      set((state) => ({
        state: { users: state.state.users.filter((user) => user.id !== userId) }
      }))
  }
}));
