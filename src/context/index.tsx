import { ProductProvider } from './products';
import { UserProvider } from './users';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserProvider>
        <ProductProvider>{children}</ProductProvider>
      </UserProvider>
    </>
  );
};
