import { create } from 'zustand';

type UserProps = {
  id: number;
  name: string;
  address: string;
};

type ActionsProps = {
  addUser: (user: UserProps) => void;
  removeUser: (userId: number) => void;
};

type StoreProps = {
  state: {
    users: UserProps[];
  };
  actions: ActionsProps;
};

export const useUsersStore = create<StoreProps>((set) => ({
  state: {
    users: []
  },
  actions: {
    addUser: (user: UserProps) =>
      set((state) => ({
        state: { users: [...state.state.users, user] }
      })),
    removeUser: (userId: number) =>
      set((state) => ({
        state: {
          users: state.state.users.filter((p) => p.id !== userId)
        }
      }))
  }
}));
