import { ProductProvider } from './products';
import { SidebarProvider } from './sidebar';
import { UserProvider } from './users';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <UserProvider>
          <ProductProvider>{children}</ProductProvider>
        </UserProvider>
      </SidebarProvider>
    </>
  );
};
