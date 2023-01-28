export type UserProps = {
  id: number;
  name: string;
  address: string;
};

export interface IUserContext {
  users: UserProps[];
  addUser: (user: UserProps) => void;
  removeUser: (userId: number) => void;
}

export type UserProviderProps = {
  children: React.ReactNode;
};
